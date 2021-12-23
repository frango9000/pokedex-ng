import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Move, PxMove } from '@pokedex-ng/domain';
import { BehaviorSubject, merge, Observable, Subscription } from 'rxjs';
import { map, skip, switchMap, tap } from 'rxjs/operators';
import { AppNavbarService } from '../../../shared/services/app/app-navbar.service';
import { FilterService } from '../../../shared/services/app/filter.service';
import { LanguageService } from '../../../shared/services/game/language.service';
import { MoveService } from '../../../shared/services/move/move.service';

@Component({
  selector: 'pokedex-ng-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss'],
})
export class MoveListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  private _moves$: BehaviorSubject<PxMove[]> = new BehaviorSubject([]);

  private _filterChange$ = new BehaviorSubject<boolean>(true);

  public expandedMove = '';
  public offset = 0;
  public increment = 72;

  constructor(
    private moveService: MoveService,
    private filterService: FilterService,
    private languageService: LanguageService,
    public appNavbarService: AppNavbarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { move: Move }) => {
      this.expandedMove = data?.move?.name || '';
    });
    this.subscriptions.add(this._updateListSubscription());
    this.subscriptions.add(this._filterChangesSubscription());
    this.appNavbarService.showSearchBar();
    this.appNavbarService.showFiltersButton();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.appNavbarService.hideAll();
    this.filterService.clearAllFilters();
  }

  getMoves$(): Observable<PxMove[]> {
    return this._moves$.asObservable();
  }

  renderMore(): void {
    this._filterChange$.next(false);
  }

  private _updateListSubscription() {
    return this._filterChange$
      .pipe(
        tap((reset) => (reset ? (this.offset = this.increment) : (this.offset += this.increment))),
        switchMap(() => this.moveService.getAllFiltered()),
        map((list) => list.slice(0, this.offset))
      )
      .subscribe((moves) => this._moves$.next(moves));
  }

  private _filterChangesSubscription() {
    return merge(
      this.filterService.getQueryFilter$().pipe(skip(1)),
      this.filterService.getTypesFilter$().pipe(skip(1)),
      this.filterService.getGenerationFilter$().pipe(skip(1)),
      this.languageService.getDisplayLanguage$().pipe(skip(1))
    ).subscribe(() => {
      this._filterChange$.next(true);
    });
  }
}
