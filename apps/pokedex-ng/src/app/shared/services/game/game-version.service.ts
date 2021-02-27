import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResourceList, GameVersionGroup, NamedApiResource, PxGameVersionGroup } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameVersionService {
  private readonly DEFAULT_VERSION = 'yellow';

  private activeVersion$ = new BehaviorSubject<string>(this.DEFAULT_VERSION);
  private availableVersions$ = new BehaviorSubject<PxGameVersionGroup[]>([]);

  constructor(private httpClient: HttpClient) {
    this._fetchAllVersionGroups().subscribe((versionGroups) => {
      this.availableVersions$.next(versionGroups);
    });
  }

  getAllVersionGroups$(): Observable<PxGameVersionGroup[]> {
    return this.availableVersions$.asObservable();
  }

  getActiveVersion$(): Observable<string> {
    return this.activeVersion$.asObservable();
  }

  setDisplayVersion(version: string): void {
    if (this.availableVersions$.value.find((value) => value.name === version)) {
      this.activeVersion$.next(version);
    }
  }

  _fetchAllVersionGroups(): Observable<PxGameVersionGroup[]> {
    return this.httpClient.get<PxGameVersionGroup[]>('pokedex-ng/assets/data/version-group.json').pipe(take(1));
  }

  private apiAllVersionGroups(): Observable<NamedApiResource[]> {
    return this.httpClient.get<ApiResourceList>('api/version-group').pipe(
      take(1),
      map((value) => value.results)
    );
  }

  private apiOneVersionGroup(versionId: string | number): Observable<GameVersionGroup> {
    return this.httpClient.get<GameVersionGroup>('api/version-group/' + versionId).pipe(take(1));
  }
}
