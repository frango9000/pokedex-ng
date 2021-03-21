import {
  ApiDescription,
  ApiEntity,
  ApiName,
  ApiResourceList,
  LocalizedDescription,
  LocalizedName,
  NamedApiResource,
} from '@pokedex-ng/domain';
import { AxiosResponse } from 'axios';
import { Axios } from 'axios-observable';
import fs from 'fs';
import { concat, Observable } from 'rxjs';
import { concatMap, delay, map, retry, tap, toArray } from 'rxjs/operators';

export abstract class AbstractGenerator<T extends ApiEntity, N extends ApiEntity> {
  protected readonly HOST = 'https://pokeapi.co/api/v2';
  protected readonly FILE_PATH = './apps/pokedex-ng/src/assets/data';
  protected readonly languages = ['ja-Hrkt', 'roomaji', 'ko', 'zh-Hant', 'fr', 'de', 'es', 'it', 'en'];

  protected append = false;
  protected offset = 0;
  protected limit = 9999;
  protected delay = 0;
  protected total = 0;
  protected current = 0;

  constructor(protected resourceName: string) {}

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

  protected _fetchList(): Observable<NamedApiResource<T>[]> {
    return Axios.get<ApiResourceList<NamedApiResource<T>>>(
      `${this.HOST}/${this.resourceName}?offset=${this.offset}&limit=${this.limit}`
    ).pipe(
      tap((response) => (this.total = response.data.results.length)),
      tap(() => console.log(`\nGenerating ${this.resourceName}`)),
      map((response) => response.data.results)
    );
  }

  protected _fetchOne(namedApiResource: NamedApiResource<T>): Observable<T> {
    return Axios.get<T>(namedApiResource.url.substring(0, namedApiResource.url.length - 1)).pipe(
      retry(10),
      delay(this.delay),
      map((response: AxiosResponse<T>) => response.data),
      tap(() => this._logResourceProgress())
    );
  }

  protected _logResourceProgress() {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(`${++this.current}/${this.total} | ${this._getPercentage()}%`);
  }

  protected _fetchAllResources(): Observable<T[]> {
    return this._fetchList().pipe(
      map((namedResources: NamedApiResource<T>[]) =>
        namedResources.map((namedResource) => this._fetchOne(namedResource))
      ),
      concatMap((namedResources: Observable<T>[]) => concat(...namedResources)),
      toArray(),
      tap(() => console.log())
    );
  }

  protected _filterResources(): Observable<T[]> {
    return this._fetchAllResources().pipe(
      map((resources) => resources.filter((resource) => this.filterResources(resource)))
    );
  }

  protected _mapResources(): Observable<N[]> {
    return this._filterResources().pipe(
      map((resources: T[]) => resources.map((resource) => this.mapResource(resource)))
    );
  }

  protected _saveResourcesToFile(): Observable<N[]> {
    return this._mapResources().pipe(
      tap((resources) => {
        if (resources.length > 0) {
          const writeOrAppend = this.append ? fs.appendFileSync : fs.writeFileSync;
          writeOrAppend(`${this.FILE_PATH}/${this.resourceName}.json`, JSON.stringify(resources));
        }
      })
    );
  }

  protected abstract mapResource(resource: T): N;

  public generateResources(): Observable<N[]> {
    return this._saveResourcesToFile();
  }

  protected filterResources(resource: T) {
    return !!resource;
  }

  protected filterAndMapNames(names: ApiName[]): LocalizedName[] {
    return names
      .filter((name) => this.languages.includes(name.language.name))
      .map((name) => ({ name: name.name, language: name.language.name }));
  }

  protected getId(url: string): number {
    try {
      return Number(url?.split('/').reverse()[1]) || 0;
    } catch (e) {
      return 0;
    }
  }

  protected _getPercentage(): number {
    return Math.trunc((this.current * 100) / this.total);
  }

  protected filterAndMapDescriptions(descriptions: ApiDescription[]): LocalizedDescription[] {
    return descriptions
      .filter((description) => this.languages.includes(description.language.name))
      .map((description) => ({ description: description.description, language: description.language.name }));
  }

  protected mapNamedApiResourcesToNames(resources: NamedApiResource<T>[]): string[] {
    return resources.map((resource) => resource.name);
  }
}
