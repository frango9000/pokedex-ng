import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokeApiResponse} from '../domain/poke-api-response';
import {NamedResource} from '../domain/named-resource';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonVersionService {

  displayVersion = 'yellow';

  constructor(private httpClient: HttpClient) {
  }

  getVersionList(): Observable<PokeApiResponse<NamedResource>> {
    return this.httpClient.get<PokeApiResponse<NamedResource>>(environment.apiUrl + '/version-group').pipe(
      tap(source => console.log(source))
    );
  }

  setDisplayVersion(lang: string): void {
    this.displayVersion = lang;
  }
}
