import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {shareReplay, tap} from 'rxjs/operators';
import {ApiNamedResource, ApiResponse} from '../domain/api-resource';
import {serviceLog} from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonVersionService {

  public static readonly DEFAULT_VERSION: 'yellow';

  public displayVersion = 'yellow';

  public displayVersion$ = new BehaviorSubject(this.displayVersion);

  constructor(private httpClient: HttpClient) {
  }

  getVersionList(): Observable<ApiResponse<ApiNamedResource>> {
    return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/version-group').pipe(
      tap(serviceLog),
      shareReplay()
    );
  }

  setDisplayVersion(lang: string): void {
    this.displayVersion = lang;
    this.displayVersion$.next(this.displayVersion);
  }

  filterWithFallback<T>(versions: T[]): T[] {
    let requested = this.filter(versions);
    if (requested.length === 0) {
      requested = versions.filter((value: any) => value.version_group.name === PokemonVersionService.DEFAULT_VERSION);
    }
    return requested.length > 0 ? requested : versions;
  }

  filter<T>(versions: T[]): T[] {
    return versions.filter((value: any) => value.version_group.name === this.displayVersion);
  }

  matchesDisplayVersion(version: string): boolean {
    return this.displayVersion === version;
  }
}
