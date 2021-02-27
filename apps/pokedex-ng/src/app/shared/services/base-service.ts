import { HttpClient, HttpParams } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { ApiEntity, ApiResourceList, NamedApiResource } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { LanguageService } from './app/language.service';

export abstract class BaseService<T extends ApiEntity, P extends ApiEntity> {
  protected resources$ = new BehaviorSubject<P[]>([]);

  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService,
    protected name: string
  ) {
    this._fetchAll().subscribe((resources) => this.resources$.next(resources));
  }

  public getOne(id: string | number): Observable<P> {
    return this.getAll().pipe(map((resources) => resources.find((res) => res.name === id || res.id === id)));
  }

  public getAll(): Observable<P[]> {
    return this.resources$.pipe(filter((res) => !!res && !!res.length));
  }

  protected _fetchAll(): Observable<P[]> {
    return this.http.get<P[]>(`pokedex-ng/assets/data/${this.name}.json`).pipe(take(1));
  }

  public fetchApiAll(offset = 0, limit = 9999): Observable<NamedApiResource<T>[]> {
    const params: HttpParams = new HttpParams().append('limit', String(limit)).append('offset', String(offset));
    return this.http
      .get<ApiResourceList<NamedApiResource<T>>>(`api/${this.name}`, { params })
      .pipe(
        take(1),
        map((value) => value.results)
      );
  }

  public fetchApiOne(id: string | number): Observable<T> {
    return this.http.get<T>(`api/${this.name}/${id}`).pipe(take(1));
  }
}

export abstract class TranslatedService<T, P> extends BaseService<T, P> {
  public setTranslations(resources: P[]) {
    return this.languageService.getAvailableLanguageIds$().pipe(
      take(1),
      tap((languages) => this._insertTranslations(this._parseTranslations(resources, languages))),
      tap(() => this.languageService.refresh())
    );
  }

  protected _insertTranslations(translations: { language: string; object: any }[]) {
    translations.forEach((translation) =>
      this.translateService.setTranslation(translation.language, translation.object, true)
    );
  }

  protected abstract _parseTranslations(resources: P[], languages: string[]): { language: string; object: any }[];

  protected _setTranslation(resource: T) {
    return this.languageService.getAvailableLanguageIds$().pipe(
      take(1),
      tap((languages) => this._insertTranslations(this._parseTranslation(resource, languages)))
    );
  }

  protected abstract _parseTranslation(resource: T, languages: string[]): { language: string; object: any }[];
}

export abstract class AutoTranslatedService<T, P> extends TranslatedService<T, P> {
  fetchApiOne(id: string | number): Observable<T> {
    return super.fetchApiOne(id).pipe(tap((resource) => this._setTranslation(resource).subscribe()));
  }

  _fetchAll(): Observable<P[]> {
    return super._fetchAll().pipe(
      tap((resources) => this.setTranslations(resources).subscribe()),
      tap(() => this.languageService.refresh())
    );
  }
}
