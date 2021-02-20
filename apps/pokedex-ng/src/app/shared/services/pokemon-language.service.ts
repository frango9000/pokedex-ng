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
  public activeLanguage: NamedApiLanguage = null;
  public activeLanguage$: BehaviorSubject<NamedApiLanguage> = new BehaviorSubject<NamedApiLanguage>(null);

  constructor(private httpClient: HttpClient, private translateService: TranslateService) {
    this.getAllLanguages().subscribe((languages) => {
      languages.forEach((value) => {
        this.translateService.getTranslation(value.name);
      });
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

  setDisplayLanguage(language: string): void {
    this.getAllLanguages().subscribe((languages) => {
      const index = languages.findIndex((value) => value.name === language);
      if (index > -1) {
        this.activeLanguage = languages[index];
        this.activeLanguage$.next(this.activeLanguage);
        this.translateService.use(language).subscribe();
      }
    });
  }
}
