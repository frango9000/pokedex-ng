import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pokemon} from '../domain/pokemon';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {shareReplay, tap} from 'rxjs/operators';
import {ApiNamedResource, ApiResponse} from '../domain/api-resource';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  getPokemonList(offset: number = 0, limit: number = 48): Observable<ApiResponse<ApiNamedResource>> {
    const pageParams: HttpParams = new HttpParams()
    .append('limit', String(limit))
    .append('offset', String(offset));
    return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/pokemon', {params: pageParams}).pipe(
      shareReplay(),
      tap(source => console.log(source))
    );
  }

  getPokemon(pokemonId: string | number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(environment.apiUrl + '/pokemon/' + pokemonId).pipe(
      shareReplay(),
      tap(source => console.log(source))
    );
  }
}
