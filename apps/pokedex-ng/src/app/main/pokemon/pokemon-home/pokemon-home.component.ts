import { Component, OnDestroy, OnInit } from '@angular/core';
import { NamedApiPokemon } from '@pokedex-ng/domain';
import { BehaviorSubject, merge, Subscription } from 'rxjs';
import { map, skip, switchMap, tap } from 'rxjs/operators';
import { FilterService } from '../../../shared/services/filter.service';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss'],
})
export class PokemonHomeComponent implements OnInit, OnDestroy {
  public pokemonList: NamedApiPokemon[] = [];
  public offset = 0;
  public increment = 72;
  public gridMode: boolean;

  private subscriptions: Subscription = new Subscription();

  private _filterChange$ = new BehaviorSubject<boolean>(true);

  constructor(private pokemonService: PokemonService, public filterService: FilterService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this._filterChange$
        .pipe(
          tap((x) => (x ? (this.offset = this.increment) : (this.offset += this.increment))),
          switchMap(() => this.pokemonService.getAllPokemonFiltered()),
          map((list) => list.slice(0, this.offset))
        )
        .subscribe((list) => {
          this.pokemonList = list;
        })
    );
    this.subscriptions.add(
      this.filterService
        .getGridMode$()
        .pipe(skip(1))
        .subscribe((gridMode) => {
          this._filterChange$.next(this.gridMode != gridMode);
          this.gridMode = gridMode;
        })
    );
    this.subscriptions.add(
      merge(
        this.filterService.getQueryFilter$().pipe(skip(1)),
        this.filterService.getTypeFilter$().pipe(skip(1)),
        this.filterService.getGenerationFilter$().pipe(skip(1))
      ).subscribe(() => {
        this._filterChange$.next(true);
      })
    );

    this.filterService.showAll();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.filterService.hideAll();
    this.filterService.hideFilters();
    this.filterService.clearAllFilters();
  }

  renderMore(): void {
    this._filterChange$.next(false);
  }

  testReset() {
    this._filterChange$.next(true);
  }

  testNoReset() {
    this._filterChange$.next(false);
  }

  clearFilters() {
    this.filterService.clearAllFilters();
  }
}
