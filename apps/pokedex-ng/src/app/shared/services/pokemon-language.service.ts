import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NamedApiLanguage, NamedApiResource, PokemonLanguage } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
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
    this.getAllLanguages().subscribe((languages) => {
      this.availableLanguages$.next(languages);
    });
  }

  getAllLanguages(): Observable<NamedApiLanguage[]> {
    return this.httpClient.get<NamedApiLanguage[]>(environment.baseHref + '/assets/data/language.json').pipe(take(1));
  }

  apiGetAllLanguages(): Observable<NamedApiResource[]> {
    return this.httpClient.get<NamedApiResource[]>(environment.apiUrl + '/language').pipe(
      tap(serviceLog),
      map((value) => value.results)
    );
  }

  apiGetLanguage(languageId: string | number): Observable<PokemonLanguage> {
    return this.httpClient.get<PokemonLanguage>(environment.apiUrl + '/language/' + languageId).pipe(tap(serviceLog));
  }

  //
  // setDisplayLanguage(language: string): void {
  //   this.getAllLanguages().subscribe((languages) => {
  //     const index = languages.findIndex((value) => value.name === language);
  //     if (index > -1) {
  //       this.activeLanguage$.next(languages[index]);
  //       // this.translateService.getTranslation(languages[index].name);
  //       this.translateService.use(language).subscribe();
  //     }
  //   });
  // }

  getDisplayLanguage$(): Observable<NamedApiLanguage> {
    return this.activeLanguage$.asObservable();
  }

  setDisplayLanguage(language: NamedApiLanguage) {
    if (this.availableLanguages$.value.includes(language)) {
      this.translateService.use(language.name).subscribe();
      this.activeLanguage$.next(language);
    }
  }

  getAvailableLanguages$(): Observable<NamedApiLanguage[]> {
    return this.availableLanguages$.asObservable();
  }
}
