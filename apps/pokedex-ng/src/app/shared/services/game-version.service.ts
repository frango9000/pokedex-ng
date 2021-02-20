import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GameVersionGroup,
  NamedApiResource,
  NamedApiResourceList,
  NamedApiVersionGroup,
  PokemonType,
} from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class GameVersionService {
  public static readonly DEFAULT_VERSION: 'yellow';

  public activeVersion = 'yellow';

  public activeVersion$ = new BehaviorSubject(this.activeVersion);

  constructor(private httpClient: HttpClient) {}

  getAllVersionGroups(): Observable<NamedApiVersionGroup[]> {
    return this.httpClient.get<NamedApiVersionGroup[]>('/assets/data/version-group.json').pipe(take(1));
  }

  apiAllVersionGroups(): Observable<NamedApiResource[]> {
    return this.httpClient.get<NamedApiResourceList<NamedApiResource>>(environment.apiUrl + '/version-group').pipe(
      map((value) => value.results),
      tap(serviceLog),
      shareReplay()
    );
  }

  apiOneVersionGroup(versionId: string | number): Observable<GameVersionGroup> {
    return this.httpClient
      .get<PokemonType>(environment.apiUrl + '/version-group/' + versionId)
      .pipe(tap(serviceLog), shareReplay());
  }

  setDisplayVersion(version: string): void {
    this.getAllVersionGroups().subscribe((versions) => {
      if (versions.findIndex((value) => value.name === version) > -1) {
        this.activeVersion = version;
        this.activeVersion$.next(this.activeVersion);
      }
    });
  }

  matchesDisplayVersion(version: string): boolean {
    return this.activeVersion === version;
  }
}
