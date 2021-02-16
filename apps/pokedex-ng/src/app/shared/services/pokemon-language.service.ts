import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NamedApiLanguage, NamedApiResource, PokemonLanguage } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import languages from '../../../assets/data/languages.json';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonLanguageService {
  public activeLanguage = languages[0];
  public activeLanguage$: BehaviorSubject<NamedApiLanguage> = new BehaviorSubject<NamedApiLanguage>(
    this.activeLanguage
  );

  constructor(private httpClient: HttpClient, private translateService: TranslateService) {
    languages.forEach((value) => {
      this.translateService.getTranslation(value.name);
    });
  }

  getApiLanguageList(): Observable<NamedApiResource[]> {
    return this.httpClient.get<NamedApiResource[]>(environment.apiUrl + '/language').pipe(
      tap(serviceLog),
      map((value) => value.results)
    );
  }

  getApiLanguage(languageId: string | number): Observable<PokemonLanguage> {
    return this.httpClient.get<PokemonLanguage>(environment.apiUrl + '/language/' + languageId).pipe(tap(serviceLog));
  }

  getLanguageList(): Observable<NamedApiLanguage[]> {
    return of(languages);
  }

  setDisplayLanguage(language: string): void {
    const index = languages.findIndex((value) => value.name === language);
    if (index > -1) {
      this.activeLanguage = languages[index];
      this.activeLanguage$.next(this.activeLanguage);
      this.translateService.use(language).subscribe();
    }
  }
}
