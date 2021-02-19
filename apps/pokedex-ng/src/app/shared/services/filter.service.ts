import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _query$ = new BehaviorSubject('');
  private _gridMode$ = new BehaviorSubject(true);
  private _showGridButton$ = new BehaviorSubject(false);
  private _showSearchBar$ = new BehaviorSubject(false);
  private _showFiltersButton$ = new BehaviorSubject(false);

  getQueryObservable(): Observable<string> {
    return this._query$.asObservable().pipe(debounce(() => interval(500)));
  }

  emitQuery(query: string) {
    this._query$.next(query);
  }

  getGridMode$(): Observable<boolean> {
    return this._gridMode$.asObservable();
  }

  setGridMode(gridMode: boolean) {
    this._gridMode$.next(gridMode);
  }

  toggleGridMode() {
    this._gridMode$.next(!this._gridMode$.value);
  }

  showGridButton() {
    this._showGridButton$.next(true);
  }

  hideGridButton() {
    this._showGridButton$.next(false);
  }

  getShowGridButton() {
    return this._showGridButton$.asObservable();
  }

  showSearchBar() {
    this._showSearchBar$.next(true);
  }

  hideSearchBar() {
    this._showSearchBar$.next(false);
  }

  getShowSearchBar() {
    return this._showSearchBar$.asObservable();
  }

  showFiltersButton() {
    this._showFiltersButton$.next(true);
  }

  hideFiltersButton() {
    this._showFiltersButton$.next(false);
  }

  getShowFiltersButton() {
    return this._showFiltersButton$.asObservable();
  }

  showAll() {
    this.showSearchBar();
    this.showGridButton();
    this.showFiltersButton();
  }

  hideAll() {
    this.hideSearchBar();
    this.hideGridButton();
    this.hideFiltersButton();
  }
}
