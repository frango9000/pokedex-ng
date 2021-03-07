import { Injectable } from '@angular/core';
import { LocalizedName } from '@pokedex-ng/domain';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { debounce, take } from 'rxjs/operators';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _queryFilter$ = new BehaviorSubject('');
  private _generationsFilter$ = new BehaviorSubject<number[]>([]);
  private _typesFilter$ = new BehaviorSubject<string[]>([]);
  private _typeFilter$ = new BehaviorSubject<string>('');
  private _typesFilterInclusiveness$ = new BehaviorSubject<boolean>(true);

  constructor(private languageService: LanguageService) {}

  getQueryFilter$(): Observable<string> {
    return this._queryFilter$.asObservable().pipe(debounce(() => interval(500)));
  }

  setQueryFilter(query: string) {
    if (this._queryFilter$.value !== query) {
      this._queryFilter$.next(query);
    }
  }

  setTypesFilter(filter: string[]): void {
    this._typesFilter$.next(filter);
  }

  getTypesFilter$(): Observable<string[]> {
    return this._typesFilter$.asObservable();
  }

  setTypeFilter(filter: string): void {
    this._typeFilter$.next(filter);
  }

  getTypeFilter$(): Observable<string> {
    return this._typeFilter$.asObservable();
  }

  setTypesFilterInclusiveness(inclusiveness: boolean): void {
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
    this._typeFilter$.next('');
    this._generationsFilter$.next([]);
  }

  setGenerationFilter(filter: number[]): void {
    this._generationsFilter$.next(filter);
  }

  getGenerationFilter$(): Observable<number[]> {
    return this._generationsFilter$.asObservable();
  }

  filterByName<N extends { name?: string }>(resourceList: N[]): N[] {
    const trimmedName = this._queryFilter$.value.trim().toLowerCase();
    return !this._queryFilter$.value.length
      ? resourceList
      : resourceList.filter((poke) => poke.name.includes(trimmedName));
  }

  filterByLocalizedName<N extends { names: LocalizedName[] }>(resourceList: N[]) {
    return !this._queryFilter$.value.length
      ? resourceList
      : this.languageService.filterByLocalizedName(resourceList, this._queryFilter$.value);
  }

  filterByTypes<T extends { types: string[] }>(resourceList: T[]): T[] {
    return !this._typesFilter$.value.length
      ? resourceList
      : resourceList.filter((resource) =>
          this._typesFilterInclusiveness$.value
            ? resource.types.some((type) => this._typesFilter$.value.includes(type))
            : this._typesFilter$.value.length === resource.types.length &&
              this._typesFilter$.value.every((type) => resource.types.includes(type))
        );
  }

  filterByType<T extends { type: string }>(resourceList: T[]): T[] {
    return !this._typeFilter$.value.length
      ? resourceList
      : resourceList.filter((resource) => resource.type === this._typeFilter$.value);
  }

  filterByGeneration<G extends { generation?: number }>(resourceList: G[]): G[] {
    return !this._generationsFilter$.value.length
      ? resourceList
      : resourceList.filter((resource) => this._generationsFilter$.value.includes(resource.generation));
  }
}
