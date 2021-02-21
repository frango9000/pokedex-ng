import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NamedApiLanguage, NamedApiResource, PokemonLanguage } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, skip, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonLanguageService {
  private readonly defaultLanguage: NamedApiLanguage = {
    name: 'en',
    id: 9,
    iso3166: 'us',
  };
  private availableLanguages$ = new BehaviorSubject<NamedApiLanguage[]>([this.defaultLanguage]);
  private activeLanguage$ = new BehaviorSubject<NamedApiLanguage>(this.defaultLanguage);

  constructor(private httpClient: HttpClient, private translateService: TranslateService) {
    this._fetchAllLanguages().subscribe((languages) => {
      this.availableLanguages$.next(languages);
    });
  }

  getDisplayLanguage$(): Observable<NamedApiLanguage> {
    return this.activeLanguage$.asObservable();
  }

  setDisplayLanguage(language: NamedApiLanguage): void {
    if (this.availableLanguages$.value.includes(language)) {
      this.translateService.use(language.name).subscribe();
      this.activeLanguage$.next(language);
    }
  }

  getAllLanguages$(): Observable<NamedApiLanguage[]> {
    return this.availableLanguages$.asObservable();
  }

  private _fetchAllLanguages(): Observable<NamedApiLanguage[]> {
    return this.httpClient.get<NamedApiLanguage[]>(environment.baseHref + '/assets/data/language.json').pipe(take(1));
  }

  private _apiFetchAllLanguages(): Observable<NamedApiResource[]> {
    return this.httpClient.get<NamedApiResource[]>(environment.apiUrl + '/language').pipe(
      tap(serviceLog),
      map((value) => value.results)
    );
  }

  private _apiFetchLanguage(languageId: string | number): Observable<PokemonLanguage> {
    return this.httpClient.get<PokemonLanguage>(environment.apiUrl + '/language/' + languageId).pipe(tap(serviceLog));
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
