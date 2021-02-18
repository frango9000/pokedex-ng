import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllPokemon } from '@pokedex-ng/data';
import { NamedApiPokemon, NamedApiResource, NamedApiResourceList, Pokemon } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getAllPokemon(offset = 0, limit = 0): Observable<NamedApiPokemon[]> {
    return this._getAllPokemonLocal(offset, limit).pipe(take(1));
  }

  getOnePokemon(pokemonId: string | number): Observable<Pokemon> {
    return this._getOnePokemonApi(pokemonId);
  }

  private _getAllPokemonLocal(offset = 0, limit = 0): Observable<NamedApiPokemon[]> {
    return getAllPokemon().pipe(map((value) => value.slice(offset, limit ? +(offset + limit) : undefined)));
  }

  private _getAllPokemonApi(offset = 0, limit = 36): Observable<NamedApiResource[]> {
    const pageParams: HttpParams = new HttpParams().append('limit', String(limit)).append('offset', String(offset));
    return this.httpClient
      .get<NamedApiResourceList>(environment.apiUrl + '/pokemon', {
        params: pageParams,
      })
      .pipe(
        map((value) => value.results),
        tap(serviceLog),
        shareReplay()
      );
  }

  private _getOnePokemonApi(pokemonId: string | number): Observable<Pokemon> {
    return this.httpClient
      .get<Pokemon>(environment.apiUrl + '/pokemon/' + pokemonId)
      .pipe(tap(serviceLog), shareReplay());
  }

  private _getOnePokemonLocal(pokemonId: string | number): Observable<NamedApiPokemon> {
    return this._getAllPokemonLocal().pipe(map((allPokemon) => allPokemon.find((pokemon) => pokemon.id === pokemonId)));
  }
}
