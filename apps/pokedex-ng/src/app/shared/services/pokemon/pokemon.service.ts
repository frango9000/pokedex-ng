import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonLocationAreaEncounters, PxPokemon } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterService } from '../app/filter.service';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService extends BaseService<Pokemon, PxPokemon> {
  constructor(protected http: HttpClient, private filterService: FilterService) {
    super('pokemon', http);
  }

  getAllFiltered(): Observable<PxPokemon[]> {
    return this.getAll().pipe(
      map((list: PxPokemon[]) => this.filterService.filterByGeneration(list)),
      map((list: PxPokemon[]) => this.filterService.filterByTypes(list)),
      map((list: PxPokemon[]) => this.filterService.filterByName(list))
    );
  }

  fetchPokemonEncounters(pokemon: Pokemon): Observable<PokemonLocationAreaEncounters[]> {
    return this.http.get<PokemonLocationAreaEncounters[]>(pokemon.location_area_encounters);
  }
}
