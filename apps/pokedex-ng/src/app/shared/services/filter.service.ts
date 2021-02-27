import { Injectable } from '@angular/core';
import { PxPokemon } from '@pokedex-ng/domain';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { debounce, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _queryFilter$ = new BehaviorSubject('');
  private _generationsFilter$ = new BehaviorSubject<number[]>([]);
  private _typesFilter$ = new BehaviorSubject<string[]>([]);
  private _typesFilterInclusiveness$ = new BehaviorSubject<boolean>(true);

  getQueryFilter$(): Observable<string> {
    return this._queryFilter$.asObservable().pipe(debounce(() => interval(500)));
  }

  setQueryFilter(query: string) {
    if (this._queryFilter$.value !== query) {
      this._queryFilter$.next(query);
    }
  }

  filterPokemonByName(pokemonList: PxPokemon[]): PxPokemon[] {
    const trimmedName = this._queryFilter$.value.trim().toLowerCase();
    return !this._queryFilter$.value.length
      ? pokemonList
      : pokemonList.filter((poke) => poke.name.includes(trimmedName));
  }

  setTypeFilter(filter: string[]): void {
    this._typesFilter$.next(filter);
  }

  getTypeFilter$(): Observable<string[]> {
    return this._typesFilter$.asObservable();
  }

  filterPokemonByType(pokemonList: PxPokemon[]): PxPokemon[] {
    return !this._typesFilter$.value.length
      ? pokemonList
      : pokemonList.filter((poke) =>
          this._typesFilterInclusiveness$.value
            ? poke.types.some((type) => this._typesFilter$.value.some((filterType) => filterType === type))
            : this._typesFilter$.value.length === poke.types.length &&
              this._typesFilter$.value.every((type) => poke.types.some((filterType) => filterType === type))
        );
  }

  setTypeFilterInclusiveness(inclusiveness: boolean): void {
    if (this._typesFilterInclusiveness$.value !== inclusiveness) {
      this._typesFilterInclusiveness$.next(inclusiveness);
      this._typesFilter$.next(this._typesFilter$.value);
    }
  }

  getTypesFilterInclusiveness$(): Observable<boolean> {
    return this._typesFilterInclusiveness$.pipe(take(1));
  }

  clearAllFilters() {
    this._queryFilter$.next('');
    this._typesFilter$.next([]);
    this._generationsFilter$.next([]);
  }

  setGenerationFilter(filter: number[]): void {
    this._generationsFilter$.next(filter);
  }

  getGenerationFilter$(): Observable<number[]> {
    return this._generationsFilter$.asObservable();
  }

  filterPokemonByGeneration(pokemonList: PxPokemon[]): PxPokemon[] {
    return !this._generationsFilter$.value.length
      ? pokemonList
      : pokemonList.filter((poke) => this._generationsFilter$.value.includes(poke.generation));
  }
}
