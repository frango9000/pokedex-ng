import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameVersionGroup, NamedApiResource, NamedApiResourceList, NamedApiVersionGroup } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class GameVersionService {
  private readonly DEFAULT_VERSION = 'yellow';

  private activeVersion$ = new BehaviorSubject<string>(this.DEFAULT_VERSION);
  private availableVersions$ = new BehaviorSubject<NamedApiVersionGroup[]>([]);

  constructor(private httpClient: HttpClient) {
    this._fetchAllVersionGroups().subscribe((versionGroups) => {
      this.availableVersions$.next(versionGroups);
    });
  }

  getAllVersionGroups$(): Observable<NamedApiVersionGroup[]> {
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

  _fetchAllVersionGroups(): Observable<NamedApiVersionGroup[]> {
    return this.httpClient
      .get<NamedApiVersionGroup[]>(environment.baseHref + '/assets/data/version-group.json')
      .pipe(take(1));
  }

  private apiAllVersionGroups(): Observable<NamedApiResource[]> {
    return this.httpClient.get<NamedApiResourceList<NamedApiResource>>(environment.apiUrl + '/version-group').pipe(
      map((value) => value.results),
      tap(serviceLog),
      shareReplay()
    );
  }

  private apiOneVersionGroup(versionId: string | number): Observable<GameVersionGroup> {
    return this.httpClient
      .get<GameVersionGroup>(environment.apiUrl + '/version-group/' + versionId)
      .pipe(tap(serviceLog), shareReplay());
  }
}
