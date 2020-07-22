import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {ApiNamedResource, ApiResponse} from '../domain/api-resource';

@Injectable({
  providedIn: 'root'
})
export class PokemonLanguageService {

  displayLanguage = 'en';

  constructor(private httpClient: HttpClient) {
  }

  getLanguageList(): Observable<ApiResponse<ApiNamedResource>> {
    return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/language').pipe(
      tap(source => console.log(source))
    );
  }

  setDisplayLanguage(lang: string): void {
    this.displayLanguage = lang;
  }
}
