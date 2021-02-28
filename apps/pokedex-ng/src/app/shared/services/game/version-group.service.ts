import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PxVersionGroup, VersionGroup } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root',
})
export class VersionGroupService extends BaseService<VersionGroup, PxVersionGroup> {
  private readonly DEFAULT_VERSION = 'yellow';
  private activeVersion$ = new BehaviorSubject<string>(this.DEFAULT_VERSION);

  constructor(protected http: HttpClient) {
    super('version-group', http);
  }

  getActiveVersionGroup$(): Observable<string> {
    return this.activeVersion$.asObservable();
  }

  setActiveVersionGroup(version: string): void {
    if (this.resources$.value.find((value) => value.name === version)) {
      this.activeVersion$.next(version);
    }
  }
}
