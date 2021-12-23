import { HttpClient, HttpParams } from '@angular/common/http';
import { TranslocoService } from '@ngneat/transloco';
import { ApiEntity, ApiResourceList, MergingMap, NamedApiResource } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, map, take, tap } from 'rxjs/operators';
import { LanguageService } from './game/language.service';

export abstract class BaseService<T extends ApiEntity, P extends ApiEntity> {
  protected resources$ = new BehaviorSubject<P[]>([]);

  constructor(protected name: string, protected http: HttpClient) {
    this._fetchAll()
      .pipe(catchError(() => of([])))
      .subscribe((resources) => this.resources$.next(resources));
  }

  public getOne(id: string | number): Observable<P> {
    return this.getAll().pipe(map((resources) => resources.find((res) => res.name === id || res.id === id)));
  }

  public getAll(): Observable<P[]> {
    return this.resources$.pipe(filter((res) => !!res && !!res.length));
  }

  public getAllIds$(): Observable<number[]> {
    return this.getAll().pipe(map((resources) => resources.map((resource) => resource.id)));
  }

  protected _fetchAll(): Observable<P[]> {
    return this.http.get<P[]>(`assets/data/${this.name}.json`).pipe(take(1));
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
  protected readonly initializationDone: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    protected name: string,
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super(name, http);
  }

  protected abstract _parseAllTranslations(resources: P[]): Observable<MergingMap>;

  protected abstract _parseOneTranslation(resource: T): Observable<MergingMap>;

  protected _setTranslations(resource: T | P[]): void {
    const translations$ = Array.isArray(resource)
      ? this._parseAllTranslations(resource)
      : this._parseOneTranslation(resource);
    translations$.pipe(take(1)).subscribe((translations) => {
      translations.forEach((translation, language) =>
        this.translocoService.setTranslation(translation, language, { merge: true })
      );
      this.initializationDone.next(true);
    });
  }
}

export abstract class SingleTranslatedService<T> extends TranslatedService<T, T> {
  fetchApiOne(id: string | number): Observable<T> {
    return super.fetchApiOne(id).pipe(tap((resource) => this._setTranslations(resource)));
  }

  protected _fetchAll(): Observable<T[]> {
    return of([]);
  }

  protected _parseAllTranslations(): Observable<MergingMap> {
    return of(new MergingMap());
  }
}

export abstract class MultiTranslatedService<T, P> extends TranslatedService<T, P> {
  _fetchAll(): Observable<P[]> {
    return super._fetchAll().pipe(tap((resources) => this._setTranslations(resources)));
  }

  protected _parseOneTranslation(): Observable<MergingMap> {
    return of(new MergingMap());
  }
}

export abstract class FullyTranslatedService<T, P> extends TranslatedService<T, P> {
  fetchApiOne(id: string | number): Observable<T> {
    return super.fetchApiOne(id).pipe(tap((resource) => this._setTranslations(resource)));
  }

  _fetchAll(): Observable<P[]> {
    return super._fetchAll().pipe(tap((resources) => this._setTranslations(resources)));
  }
}
