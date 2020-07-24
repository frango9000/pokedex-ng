import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ApiNamedPokemon, Pokemon} from '../domain/pokemon';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map, shareReplay, tap} from 'rxjs/operators';
import {ApiNamedResource, ApiResponse} from '../domain/api-resource';

export function serviceLog(response): void {
  if (environment.logServiceResponses) {
    console.log(response);
  }
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  getPokemonList(offset: number = 0, limit: number = 36): Observable<ApiResponse<ApiNamedResource>> {
    const pageParams: HttpParams = new HttpParams()
    .append('limit', String(limit))
    .append('offset', String(offset));
    return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/pokemon', {params: pageParams}).pipe(
      tap(serviceLog),
      shareReplay()
    );
  }

  getPokemon(pokemonId: string | number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(environment.apiUrl + '/pokemon/' + pokemonId).pipe(
      tap(serviceLog),
      shareReplay()
    );
  }

  getFirebasePokemonList(offset: number = 1, limit: number = 36): Observable<ApiNamedPokemon[]> {
    const pageParams: HttpParams = new HttpParams()
    .append('orderBy', '"$key"')
    .append('startAt', String('"' + offset + '"'))
    .append('endAt', String('"' + (offset + (limit - 1)) + '"'));
    return this.httpClient.get<ApiNamedPokemon[]>(environment.firebaseApi + '/pokemon.json', {params: pageParams}).pipe(
      map(id => Object.keys(id).map(pokemon => id[pokemon])),
      tap(serviceLog),
      shareReplay()
    );
  }

  postFirebasePokemon(data: ApiNamedPokemon): Observable<any> {
    return this.httpClient.put(environment.firebaseApi + '/pokemon/' + data.id + '.json', data).pipe(
      tap(serviceLog)
    );
  }
}
