import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PokeApiResponse} from '../domain/poke-api-response';
import {NamedResource} from '../domain/named-resource';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonLanguageService {

  displayLanguage = 'en';

  constructor(private httpClient: HttpClient) {
  }

  getPokemonList(): Observable<PokeApiResponse<NamedResource>> {
    return this.httpClient.get<PokeApiResponse<NamedResource>>(environment.apiUrl + '/language').pipe(
      tap(source => console.log(source))
    );
  }

  setDisplayLanguage(lang: string): void {
    this.displayLanguage = lang;
  }
}
