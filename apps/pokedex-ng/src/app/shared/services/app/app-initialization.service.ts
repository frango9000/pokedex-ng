import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppInitializationService {
  constructor() {}

  initialize(): Observable<unknown> {
    return of();
  }
}
