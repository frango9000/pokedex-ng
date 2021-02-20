import { Injectable } from '@angular/core';
import { NamedApiPokemon } from '@pokedex-ng/domain';
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
  private _gridMode$ = new BehaviorSubject(true);
  private _showGridButton$ = new BehaviorSubject(false);
  private _showSearchBar$ = new BehaviorSubject(false);
  private _showFiltersButton$ = new BehaviorSubject(false);
  private _showFilters$ = new BehaviorSubject(true);

  getQueryFilter$(): Observable<string> {
    return this._queryFilter$.asObservable().pipe(debounce(() => interval(500)));
  }

  setQueryFilter(query: string) {
    if (this._queryFilter$.value !== query) {
      this._queryFilter$.next(query);
    }
  }

  filterPokemonByName(pokemonList: NamedApiPokemon[]): NamedApiPokemon[] {
    const trimmedName = this._queryFilter$.value.trim().toLowerCase();
    return !this._queryFilter$.value.length
      ? pokemonList
      : pokemonList.filter((poke) => poke.name.includes(trimmedName));
  }

  getGridMode$(): Observable<boolean> {
    return this._gridMode$.asObservable();
  }

  setGridMode(gridMode: boolean) {
    if (this._gridMode$.value !== gridMode) {
      this._gridMode$.next(gridMode);
    }
  }

  toggleGridMode(): void {
    this._gridMode$.next(!this._gridMode$.value);
  }

  showGridButton(): void {
    this._showGridButton$.next(true);
  }

  hideGridButton(): void {
    this._showGridButton$.next(false);
  }

  getShowGridButton$(): Observable<boolean> {
    return this._showGridButton$.asObservable();
  }

  showSearchBar(): void {
    this._showSearchBar$.next(true);
  }

  hideSearchBar(): void {
    this._showSearchBar$.next(false);
    this._queryFilter$.next('');
  }

  getShowSearchBar$(): Observable<boolean> {
    return this._showSearchBar$.asObservable();
  }

  showFiltersButton(): void {
    this._showFiltersButton$.next(true);
  }

  hideFiltersButton(): void {
    this._showFiltersButton$.next(false);
  }

  getShowFiltersButton$(): Observable<boolean> {
    return this._showFiltersButton$.asObservable();
  }

  showAll(): void {
    this.showSearchBar();
    this.showGridButton();
    this.showFiltersButton();
  }

  hideAll(): void {
    this.hideSearchBar();
    this.hideGridButton();
    this.hideFiltersButton();
  }

  showFilters(): void {
    this._showFilters$.next(true);
  }

  hideFilters(): void {
    this._showFilters$.next(false);
  }

  toggleFilters(): void {
    this._showFilters$.next(!this._showFilters$.value);
  }

  getShowFilters$(): Observable<boolean> {
    return this._showFilters$.asObservable();
  }

  setTypeFilter(filter: string[]): void {
    this._typesFilter$.next(filter);
  }

  getTypeFilter$(): Observable<string[]> {
    return this._typesFilter$.asObservable();
  }

  filterPokemonByType(pokemonList: NamedApiPokemon[]): NamedApiPokemon[] {
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

  filterPokemonByGeneration(pokemonList: NamedApiPokemon[]): NamedApiPokemon[] {
    return !this._generationsFilter$.value.length
      ? pokemonList
      : pokemonList.filter((poke) => this._generationsFilter$.value.includes(poke.generation));
  }
}
