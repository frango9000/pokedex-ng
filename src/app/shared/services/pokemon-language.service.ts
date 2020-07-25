import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ApiNamedResource} from '../domain/api-resource';
import {TranslateService} from '@ngx-translate/core';

export const languages = [
  {name: 'ja-Hrkt', url: 'https://pokeapi.co/api/v2/language/1/'},
  {name: 'roomaji', url: 'https://pokeapi.co/api/v2/language/2/'},
  {name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/'},
  {name: 'zh-Hant', url: 'https://pokeapi.co/api/v2/language/4/'},
  {name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/'},
  {name: 'de', url: 'https://pokeapi.co/api/v2/language/6/'},
  {name: 'es', url: 'https://pokeapi.co/api/v2/language/7/'},
  {name: 'it', url: 'https://pokeapi.co/api/v2/language/8/'},
  {name: 'en', url: 'https://pokeapi.co/api/v2/language/9/'},
  {name: 'cs', url: 'https://pokeapi.co/api/v2/language/10/'},
  {name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/'},
  {name: 'zh-Hans', url: 'https://pokeapi.co/api/v2/language/12/'},
  {name: 'pt-BR', url: 'https://pokeapi.co/api/v2/language/13/'}
];

@Injectable({
  providedIn: 'root'
})
export class PokemonLanguageService {

  public activeLanguage = 'en';
  public activeLanguage$: BehaviorSubject<string> = new BehaviorSubject<string>(this.activeLanguage);

  constructor(private translateService: TranslateService) {
    languages.forEach(value => {
      this.translateService.getTranslation(value.name);
    });
  }

  getLanguageList(): Observable<ApiNamedResource[]> {
    // return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/language').pipe(
    //   tap(serviceLog),
    //   shareReplay()
    // );
    return of(languages);
  }

  setDisplayLanguage(language: string): void {
    if (languages.findIndex(value => value.name === language) > -1) {
      this.activeLanguage = language;
      this.activeLanguage$.next(this.activeLanguage);
    }
    this.translateService.use(language).subscribe();
  }
}
