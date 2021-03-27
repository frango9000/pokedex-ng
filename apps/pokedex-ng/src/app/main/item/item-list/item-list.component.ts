import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, merge, Observable, Subscription } from 'rxjs';
import { Item, PxItem } from '@pokedex-ng/domain';
import { ItemService } from '../../../shared/services/item/item.service';
import { FilterService } from '../../../shared/services/app/filter.service';
import { LanguageService } from '../../../shared/services/game/language.service';
import { AppNavbarService } from '../../../shared/services/app/app-navbar.service';
import { ActivatedRoute } from '@angular/router';
import { map, skip, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'pokedex-ng-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  private _items$: BehaviorSubject<PxItem[]> = new BehaviorSubject([]);

  private _filterChange$ = new BehaviorSubject<boolean>(true);

  public expandedItem = '';
  public offset = 0;
  public increment = 72;

  constructor(
    private itemService: ItemService,
    private filterService: FilterService,
    private languageService: LanguageService,
    public appNavbarService: AppNavbarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { item: Item }) => {
      this.expandedItem = data?.item?.name || '';
    });
    this.subscriptions.add(this._updateListSubscription());
    this.subscriptions.add(this._filterChangesSubscription());
    this.appNavbarService.showSearchBar();
    this.appNavbarService.showFiltersButton();
    this.appNavbarService.showVersionGroupPicker();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.appNavbarService.hideAll();
    this.filterService.clearAllFilters();
  }

  getItems$(): Observable<PxItem[]> {
    return this._items$.asObservable();
  }

  renderMore(): void {
    this._filterChange$.next(false);
  }

  private _updateListSubscription() {
    return this._filterChange$
      .pipe(
        tap((reset) => (reset ? (this.offset = this.increment) : (this.offset += this.increment))),
        switchMap(() => this.itemService.getAllFiltered()),
        map((list) => list.slice(0, this.offset))
      )
      .subscribe((items) => this._items$.next(items));
  }

  private _filterChangesSubscription() {
    return merge(
      this.filterService.getQueryFilter$().pipe(skip(1)),
      this.filterService.getItemPocketFilter$().pipe(skip(1)),
      this.filterService.getItemCategoryFilter$().pipe(skip(1)),
      this.languageService.getDisplayLanguage$().pipe(skip(1))
    ).subscribe(() => {
      this._filterChange$.next(true);
    });
  }
}
