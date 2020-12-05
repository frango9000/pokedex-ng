import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import versions from '../../../assets/data/versions.json';
import { environment } from '../../../environments/environment';
import { ApiNamedResource, ApiResponse } from '../domain/api-resource';
import { PokemonType } from '../domain/pokemon-type';
import { ApiNamedVersionGroup, PokemonVersionGroup } from '../domain/pokemon-version-group';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonVersionService {
  public static readonly DEFAULT_VERSION: 'yellow';

  public activeVersion = 'yellow';

  public activeVersion$ = new BehaviorSubject(this.activeVersion);

  constructor(private httpClient: HttpClient) {}

  getVersionList(): Observable<ApiNamedVersionGroup[]> {
    return of(versions);
  }

  getApiVersionList(): Observable<ApiNamedResource[]> {
    return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/version-group').pipe(
      map((value) => value.results),
      tap(serviceLog),
      shareReplay()
    );
  }

  getApiVersion(versionId: string | number): Observable<PokemonVersionGroup> {
    return this.httpClient
      .get<PokemonType>(environment.apiUrl + '/version-group/' + versionId)
      .pipe(tap(serviceLog), shareReplay());
  }

  setDisplayVersion(version: string): void {
    if (versions.findIndex((value) => value.name === version) > -1) {
      this.activeVersion = version;
      this.activeVersion$.next(this.activeVersion);
    }
  }

  matchesDisplayVersion(version: string): boolean {
    return this.activeVersion === version;
  }
}
