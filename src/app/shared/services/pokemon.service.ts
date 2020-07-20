import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PokeApiResponse} from '../domain/poke-api-response';
import {Pokemon} from '../domain/pokemon';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {NamedResource} from '../domain/named-resource';
import {PokemonSpecies} from '../domain/pokemon-species';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  getPokemonList(offset: number = 0, limit: number = 48): Observable<PokeApiResponse<NamedResource>> {
    const pageParams: HttpParams = new HttpParams()
    .append('limit', String(limit))
    .append('offset', String(offset));
    return this.httpClient.get<PokeApiResponse<NamedResource>>(environment.apiUrl + '/pokemon', {params: pageParams}).pipe(
      tap(source => console.log(source))
    );
  }

  getPokemon(pokemonId: string | number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(environment.apiUrl + '/pokemon/' + pokemonId).pipe(
      tap(source => console.log(source))
    );
  }

  getPokemonSpecies(speciesId: string | number): Observable<PokemonSpecies> {
    return this.httpClient.get<PokemonSpecies>(environment.apiUrl + '/pokemon-species/' + speciesId).pipe(
      tap(source => console.log(source))
    );
  }
}
