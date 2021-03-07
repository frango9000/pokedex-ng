import { Component, OnDestroy, OnInit } from '@angular/core';
import { PxPokemon } from '@pokedex-ng/domain';
import { BehaviorSubject, merge, Subscription } from 'rxjs';
import { map, skip, switchMap, tap } from 'rxjs/operators';
import { AppNavbarService } from '../../../shared/services/app/app-navbar.service';
import { FilterService } from '../../../shared/services/app/filter.service';
import { PokemonService } from '../../../shared/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss'],
})
export class PokemonHomeComponent implements OnInit, OnDestroy {
  public pokemonList: PxPokemon[] = [];
  public offset = 0;
  public increment = 72;

  private subscriptions: Subscription = new Subscription();

  private _filterChange$ = new BehaviorSubject<boolean>(true);

  constructor(
    private pokemonService: PokemonService,
    public filterService: FilterService,
    public appNavbarService: AppNavbarService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(this._updateListSubscription());
    this.subscriptions.add(this._filterChangesSubscription());
    this.appNavbarService.showGridButton();
    this.appNavbarService.showSearchBar();
    this.appNavbarService.showFiltersButton();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.appNavbarService.hideAll();
    this.filterService.clearAllFilters();
  }

  renderMore(): void {
    this._filterChange$.next(false);
  }

  private _updateListSubscription() {
    return this._filterChange$
      .pipe(
        tap((reset) => (reset ? (this.offset = this.increment) : (this.offset += this.increment))),
        switchMap(() => this.pokemonService.getAllFiltered()),
        map((list) => list.slice(0, this.offset))
      )
      .subscribe((list) => (this.pokemonList = list));
  }

  private _filterChangesSubscription() {
    return merge(
      this.filterService.getQueryFilter$().pipe(skip(1)),
      this.filterService.getTypesFilter$().pipe(skip(1)),
      this.filterService.getGenerationFilter$().pipe(skip(1)),
      this.appNavbarService.getGridMode$().pipe(skip(1))
    ).subscribe(() => {
      this._filterChange$.next(true);
    });
  }
}
