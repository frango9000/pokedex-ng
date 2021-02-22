import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppNavbarService {
  private _gridMode$ = new BehaviorSubject(true);
  private _showGridButton$ = new BehaviorSubject(false);
  private _showSearchBar$ = new BehaviorSubject(false);
  private _showFiltersButton$ = new BehaviorSubject(false);
  private _showFilters$ = new BehaviorSubject(true);
  private _showVersionGroupPicker$ = new BehaviorSubject<boolean>(false);

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

  getShowVersionGroupPicker$(): Observable<boolean> {
    return this._showVersionGroupPicker$.asObservable();
  }

  showVersionGroupPicker$() {
    this._showVersionGroupPicker$.next(true);
  }

  hideVersionGroupPicker$() {
    this._showVersionGroupPicker$.next(false);
  }
}
