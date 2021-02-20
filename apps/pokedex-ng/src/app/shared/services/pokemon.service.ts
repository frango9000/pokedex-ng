import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllPokemon } from '@pokedex-ng/data';
import { NamedApiPokemon, NamedApiResource, NamedApiResourceList, Pokemon } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient, private filterService: FilterService) {}

  getAllPokemonLocal(offset = 0, limit = 0): Observable<NamedApiPokemon[]> {
    return getAllPokemon().pipe(
      take(1),
      map((value) => (!offset && !limit ? value : value.slice(offset, limit ? +(offset + limit) : undefined)))
    );
  }

  getAllPokemonFiltered(): Observable<NamedApiPokemon[]> {
    return this.getAllPokemonLocal().pipe(
      map((list: NamedApiPokemon[]) => this.filterService.filterPokemonByGeneration(list)),
      map((list: NamedApiPokemon[]) => this.filterService.filterPokemonByType(list)),
      map((list: NamedApiPokemon[]) => this.filterService.filterPokemonByName(list))
    );
  }

  getOnePokemonApi(pokemonId: string | number): Observable<Pokemon> {
    return this.httpClient
      .get<Pokemon>(environment.apiUrl + '/pokemon/' + pokemonId)
      .pipe(tap(serviceLog), shareReplay());
  }

  _getAllPokemonApi(offset = 0, limit = 36): Observable<NamedApiResource[]> {
    const params: HttpParams = new HttpParams().append('limit', String(limit)).append('offset', String(offset));
    return this.httpClient
      .get<NamedApiResourceList>(environment.apiUrl + '/pokemon', { params })
      .pipe(
        map((value) => value.results),
        tap(serviceLog),
        shareReplay()
      );
  }

  getOnePokemonLocal(pokemonId: string | number): Observable<NamedApiPokemon> {
    return this.getAllPokemonLocal().pipe(map((allPokemon) => allPokemon.find((pokemon) => pokemon.id === pokemonId)));
  }
}
