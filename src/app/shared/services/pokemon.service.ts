import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PokeApiResponse} from '../domain/poke-api-response';
import {Pokemon} from '../domain/pokemon';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  getPokemonList(offset: number = 0, limit: number = 48): Observable<PokeApiResponse<Pokemon>> {
    const pageParams: HttpParams = new HttpParams()
    .append('limit', String(limit))
    .append('offset', String(offset));
    return this.httpClient.get<PokeApiResponse<Pokemon>>(environment.apiUrl + '/pokemon', {params: pageParams}).pipe(
      tap(source => console.log(source))
    );
  }

  getPokemon(pokemonId: string | number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(environment.apiUrl + '/pokemon/' + pokemonId).pipe(
      tap(source => console.log(source))
    );
  }
}
