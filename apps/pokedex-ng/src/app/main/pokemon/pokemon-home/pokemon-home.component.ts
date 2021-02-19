import { Component, OnDestroy, OnInit } from '@angular/core';
import { NamedApiPokemon } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
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
      this._getFilteredList().subscribe((list) => {
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
      this.filterService
        .getQueryFilter$()
        .pipe(skip(1))
        .subscribe(() => {
          this._filterChange$.next(true);
        })
    );
    this.subscriptions.add(
      this.filterService
        .getTypeFilter$()
        .pipe(skip(1))
        .subscribe(() => {
          this._filterChange$.next(true);
        })
    );
    this.filterService.showAll();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.filterService.hideAll();
    this.filterService.hideFilters();
  }

  renderMore(): void {
    this._filterChange$.next(false);
  }

  private _getFilteredList(): Observable<NamedApiPokemon[]> {
    return this._filterChange$.pipe(
      // debugLog(console.log),
      tap((x) => (x ? (this.offset = this.increment) : (this.offset += this.increment))),
      switchMap(() => this.pokemonService.getAllPokemonLocal()),
      map((list) => this.filterService.filterPokemonByName(list)),
      map((list) => this.filterService.filterPokemonByType(list)),
      map((list) => list.slice(0, this.offset))
    );
  }

  testReset() {
    this._filterChange$.next(true);
  }

  testNoReset() {
    this._filterChange$.next(false);
  }
}
