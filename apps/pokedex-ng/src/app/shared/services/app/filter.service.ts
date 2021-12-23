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
  private _typesFilter$ = new BehaviorSubject<string[]>([]);
  private _typesFilterInclusiveness$ = new BehaviorSubject<boolean>(true);
  private _generationsFilter$ = new BehaviorSubject<number[]>([]);
  private _itemPocketsFilter$ = new BehaviorSubject<string[]>([]);
  private _itemCategoriesFilter$ = new BehaviorSubject<string[]>([]);

  constructor(private languageService: LanguageService) {}

  clearAllFilters() {
    this._queryFilter$.next('');
    this._typesFilter$.next([]);
    this._generationsFilter$.next([]);
    this._typesFilterInclusiveness$.next(true);
    this._itemPocketsFilter$.next([]);
    this._itemCategoriesFilter$.next([]);
  }

  // Query Filter

  getQueryFilter$(): Observable<string> {
    return this._queryFilter$.asObservable().pipe(debounce(() => interval(500)));
  }

  setQueryFilter(query: string) {
    if (this._queryFilter$.value !== query) {
      this._queryFilter$.next(query);
    }
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

  // Type Filter

  setTypesFilter(filter: string[]): void {
    this._typesFilter$.next(filter);
  }

  getTypesFilter$(): Observable<string[]> {
    return this._typesFilter$.asObservable();
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
    return !this._typesFilter$.value.length
      ? resourceList
      : resourceList.filter((resource) => this._typesFilter$.value.includes(resource.type));
  }

  filterByChildType<M>(resourceList: M[], child: string): M[] {
    return !this._typesFilter$.value.length || !child
      ? resourceList
      : resourceList.filter((resource) => this._typesFilter$.value.includes(resource[child]?.type));
  }

  // Generation Filter

  setGenerationFilter(filter: number[]): void {
    this._generationsFilter$.next(filter);
  }

  getGenerationFilter$(): Observable<number[]> {
    return this._generationsFilter$.asObservable();
  }

  filterByGeneration<G extends { generation?: number }>(resourceList: G[]): G[] {
    return !this._generationsFilter$.value.length
      ? resourceList
      : resourceList.filter((resource) => this._generationsFilter$.value.includes(resource.generation));
  }

  // ItemPocket Filter

  getItemPocketFilter$(): Observable<string[]> {
    return this._itemPocketsFilter$.asObservable();
  }

  setItemPocketFilter(filter: string[]): void {
    this._itemPocketsFilter$.next(filter);
  }

  filterByItemPocket<P extends { pocket: string }>(resourceList: P[]): P[] {
    return !this._itemPocketsFilter$.value.length
      ? resourceList
      : resourceList.filter((resource) => this._itemPocketsFilter$.value.includes(resource.pocket));
  }

  // ItemCategory Filter

  getItemCategoryFilter$(): Observable<string[]> {
    return this._itemCategoriesFilter$.asObservable();
  }

  setItemCategoryFilter(filter: string[]): void {
    this._itemCategoriesFilter$.next(filter);
  }

  filterByItemCategory<P extends { category: string }>(resourceList: P[]): P[] {
    return !this._itemCategoriesFilter$.value.length
      ? resourceList
      : resourceList.filter((resource) => this._itemCategoriesFilter$.value.includes(resource.category));
  }
}
