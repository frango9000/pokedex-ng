import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ApiNamedResource} from '../domain/api-resource';
import {TranslateService} from '@ngx-translate/core';
// @ts-ignore
import languages from '../../../assets/data/languages.json';


@Injectable({
  providedIn: 'root'
})
export class PokemonLanguageService {

  public activeLanguage = languages[0];
  public activeLanguage$: BehaviorSubject<ApiNamedLanguage> = new BehaviorSubject<ApiNamedLanguage>(this.activeLanguage);

  constructor(private translateService: TranslateService) {
    languages.forEach(value => {
      this.translateService.getTranslation(value.name);
    });
  }

  getLanguageList(): Observable<ApiNamedLanguage[]> {
    // return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/language').pipe(
    //   tap(serviceLog),
    //   shareReplay()
    // );
    return of(languages);
  }

  setDisplayLanguage(language: string): void {
    const index = languages.findIndex(value => value.name === language);
    if (index > -1) {
      this.activeLanguage = languages[index];
      this.activeLanguage$.next(this.activeLanguage);
      this.translateService.use(language).subscribe();
    }
  }
}

export interface ApiNamedLanguage extends ApiNamedResource {
  iso3166: string;
}
