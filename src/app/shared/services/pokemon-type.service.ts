import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {PokemonType} from '../domain/pokemon-type';
import {NamedResource} from '../domain/named-resource';
import {PokeApiResponse} from '../domain/poke-api-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {

  constructor(public httpClient: HttpClient) {
  }

  getType(typeId: string | number): Observable<PokemonType> {
    return this.httpClient.get<PokemonType>(environment.apiUrl + '/type/' + typeId).pipe(
      tap(source => console.log(source))
    );
  }

  getTypes(): Observable<PokeApiResponse<NamedResource>> {
    const pageParams: HttpParams = new HttpParams()
    .append('limit', '100');
    return this.httpClient.get<PokeApiResponse<NamedResource>>(environment.apiUrl + '/type/').pipe(
      tap(source => console.log(source))
    );
  }
}
