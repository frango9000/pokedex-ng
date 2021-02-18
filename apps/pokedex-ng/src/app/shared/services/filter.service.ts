import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _query$ = new BehaviorSubject('');

  getQueryObservable() {
    return this._query$.pipe(debounce(() => interval(500)));
  }

  emitQuery(query: string) {
    this._query$.next(query);
  }
}
