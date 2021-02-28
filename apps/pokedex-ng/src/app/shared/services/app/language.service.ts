import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiResourceList, Language, NamedApiResource, PxLanguage } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, skip, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly DEFAULT_LANGUAGE: PxLanguage = {
    name: 'en',
    id: 9,
    iso3166: 'us',
  };
  public availableLanguages$ = new BehaviorSubject<PxLanguage[]>([this.DEFAULT_LANGUAGE]);
  private activeLanguage$ = new BehaviorSubject<PxLanguage>(this.DEFAULT_LANGUAGE);

  constructor(private http: HttpClient, private translateService: TranslateService) {
    this._fetchAllLanguages().subscribe((languages) => {
      this.availableLanguages$.next(languages);
    });
  }

  getDisplayLanguage$(): Observable<PxLanguage> {
    return this.activeLanguage$.asObservable();
  }

  setDisplayLanguage(selectedLanguage: string): void {
    const language = this.availableLanguages$.value.find((value) => value.name === selectedLanguage);
    if (language) {
      this.translateService.use(language.name).subscribe();
      this.activeLanguage$.next(language);
    }
  }

  refresh() {
    this.setDisplayLanguage(this.activeLanguage$.value.name);
  }

  getAvailableLanguages$(): Observable<PxLanguage[]> {
    return this.availableLanguages$.asObservable();
  }

  getAvailableLanguageIds$(): Observable<string[]> {
    return this.getAvailableLanguages$().pipe(
      map((namedLanguages) => namedLanguages.map((namedLanguage) => namedLanguage.name))
    );
  }

  private _fetchAllLanguages(): Observable<PxLanguage[]> {
    return this.http.get<PxLanguage[]>('assets/data/language.json').pipe(take(1));
  }

  private _apiFetchAllLanguages(): Observable<NamedApiResource[]> {
    return this.http.get<ApiResourceList>('api/language').pipe(
      take(1),
      map((value) => value.results)
    );
  }

  private _apiFetchLanguage(languageId: string | number): Observable<Language> {
    return this.http.get<Language>('api/language/' + languageId).pipe(take(1));
  }

  parseTranslations() {
    this.availableLanguages$.pipe(skip(1)).subscribe((value) => {
      value.forEach((language) => {
        language.names.forEach((name) => {
          this.translateService.setTranslation(
            name.language,
            {
              LANGUAGE: {
                [language.name]: name.name,
              },
            },
            true
          );
        });
      });
    });
  }
}
