import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {PokeApiResponse} from '../domain/poke-api-response';
import {NamedResource} from '../domain/named-resource';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonVersionService {

  public static readonly DEFAULT_VERSION: 'yellow';

  public displayVersion = 'yellow';

  public displayVersion$ = new BehaviorSubject(this.displayVersion);

  constructor(private httpClient: HttpClient) {
  }

  getVersionList(): Observable<PokeApiResponse<NamedResource>> {
    return this.httpClient.get<PokeApiResponse<NamedResource>>(environment.apiUrl + '/version-group').pipe(
      tap(source => console.log(source))
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
