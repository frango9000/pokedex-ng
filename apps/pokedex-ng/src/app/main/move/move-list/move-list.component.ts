import { Component, OnDestroy, OnInit } from '@angular/core';
import { PxMove } from '@pokedex-ng/domain';
import { BehaviorSubject, merge, Observable, Subscription } from 'rxjs';
import { skip, switchMap } from 'rxjs/operators';
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

  public expandedMove = 0;

  constructor(
    private moveService: MoveService,
    private filterService: FilterService,
    private languageService: LanguageService,
    public appNavbarService: AppNavbarService
  ) {}

  ngOnInit(): void {
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

  private _updateListSubscription() {
    return this._filterChange$
      .pipe(switchMap(() => this.moveService.getAllFiltered()))
      .subscribe((moves) => this._moves$.next(moves));
  }
}
