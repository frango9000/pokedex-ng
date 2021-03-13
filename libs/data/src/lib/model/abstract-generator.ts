import {
  ApiDescription,
  ApiEntity,
  ApiName,
  ApiResourceList,
  LocalizedDescription,
  LocalizedName,
  NamedApiResource,
} from '@pokedex-ng/domain';
import { Axios } from 'axios-observable';
import fs from 'fs';
import { Observable, Subject } from 'rxjs';
import { concatAll, delay, filter, map, retry } from 'rxjs/operators';

export abstract class AbstractGenerator<T extends ApiEntity, N extends ApiEntity> {
  protected host = 'https://pokeapi.co/api/v2';
  protected filePath = './apps/pokedex-ng/src/assets/data';
  protected append = false;
  protected total = 0;
  protected offset = 0;
  protected limit = 9999;
  protected delay = 200;

  protected readonly languages = ['ja-Hrkt', 'roomaji', 'ko', 'zh-Hant', 'fr', 'de', 'es', 'it', 'en'];

  protected list = [];
  protected subject$: Subject<Observable<T>> = new Subject<Observable<T>>();

  constructor() {
    this.subject$.pipe(concatAll()).subscribe({
      next: this.onNext.bind(this),
      error: this.onError.bind(this),
      complete: this.onComplete.bind(this),
    });
  }

  public setAppend(append: boolean): AbstractGenerator<T, N> {
    this.append = append;
    return this;
  }

  public setOffset(offset: number): AbstractGenerator<T, N> {
    this.offset = offset;
    return this;
  }

  public setLimit(limit: number): AbstractGenerator<T, N> {
    this.limit = limit;
    return this;
  }

  public setDelay(inputDelay: number): AbstractGenerator<T, N> {
    this.delay = inputDelay;
    return this;
  }

  protected abstract mapResource(resource: T): N;

  protected abstract getResourceName(): string;

  protected onNext(resource: T): void {
    this.list.push(this.mapResource(resource));
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(
      `${this._getPercentage()}% | [${this.list.length}/${
        this.total
      }] | ${this._getRemainingTime()}s | ${this.getResourceName()} id: ${this.getResourceId(resource)}`
    );
  }

  protected onComplete(): void {
    if (this.list.length > 0) {
      console.log(
        `\nResource ${this.getResourceName()} generated. [${this.list.length}/${this.total}]${
          this.list.length !== this.total ? ' -' + (this.total - this.list.length) : ''
        }`
      );
      const writeOrAppend = this.append ? fs.appendFileSync : fs.writeFileSync;
      writeOrAppend(`${this.filePath}/${this.getResourceName()}.json`, JSON.stringify(this.list));
      console.log(`Resource ${this.getResourceName()} written to file.`);
    } else {
      console.log('No Resources found');
    }
  }

  protected onError(err) {
    console.log(`\n${this._getPercentage()}% | ${this.getResourceName()}: Error --> ${this.list.length}/${this.total}`);
    console.trace('\n' + err);
    this.onComplete();
  }

  public generateResource(): void {
    Axios.get<ApiResourceList>(
      `${this.host}/${this.getResourceName()}?offset=${this.offset}&limit=${this.limit}`
    ).subscribe((res) => {
      this.total = res?.data?.results?.length || 0;
      console.log(`Total ${this.getResourceName()}: ${this.total}`);
      res.data.results.forEach((resource) => {
        this.subject$.next(
          // Axios.get<T>(resource.url).pipe(
          Axios.get<T>(resource.url.substring(0, resource.url.length - 1)).pipe(
            retry(10),
            delay(this.delay),
            map((value) => value.data),
            filter((value) => this.filterResources(value))
          )
        );
      });
      this.subject$.complete();
    }, console.error);
  }

  protected _getPercentage(): number {
    return Math.trunc((this.list.length * 100) / this.total);
  }

  protected _getRemainingTime(): number {
    return Math.trunc((this.total - this.list.length) / (1000 / this.delay));
  }

  protected getResourceId(resource: T) {
    return resource.id;
  }

  protected filterResources(resource: T) {
    return !!resource;
  }

  protected filterAndMapNames(names: ApiName[]): LocalizedName[] {
    return names
      .filter((name) => this.languages.includes(name.language.name))
      .map((name) => ({ name: name.name, language: name.language.name }));
  }

  protected filterAndMapDescriptions(descriptions: ApiDescription[]): LocalizedDescription[] {
    return descriptions
      .filter((description) => this.languages.includes(description.language.name))
      .map((description) => ({ description: description.description, language: description.language.name }));
  }

  protected getId(url: string): number {
    try {
      return Number(url?.split('/').reverse()[1]) || 0;
    } catch (e) {
      return 0;
    }
  }

  protected mapNamedApiResourcesToNames(resources: NamedApiResource<T>[]): string[] {
    return resources.map((resource) => resource.name);
  }
}
