import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ApiNamedResource} from '../domain/api-resource';

export const versions = [
  {name: 'red-blue', url: 'https://pokeapi.co/api/v2/version-group/1/'},
  {name: 'yellow', url: 'https://pokeapi.co/api/v2/version-group/2/'},
  {name: 'gold-silver', url: 'https://pokeapi.co/api/v2/version-group/3/'},
  {name: 'crystal', url: 'https://pokeapi.co/api/v2/version-group/4/'},
  {name: 'ruby-sapphire', url: 'https://pokeapi.co/api/v2/version-group/5/'},
  {name: 'emerald', url: 'https://pokeapi.co/api/v2/version-group/6/'},
  {name: 'firered-leafgreen', url: 'https://pokeapi.co/api/v2/version-group/7/'},
  {name: 'diamond-pearl', url: 'https://pokeapi.co/api/v2/version-group/8/'},
  {name: 'platinum', url: 'https://pokeapi.co/api/v2/version-group/9/'},
  {name: 'heartgold-soulsilver', url: 'https://pokeapi.co/api/v2/version-group/10/'},
  {name: 'black-white', url: 'https://pokeapi.co/api/v2/version-group/11/'},
  {name: 'colosseum', url: 'https://pokeapi.co/api/v2/version-group/12/'},
  {name: 'xd', url: 'https://pokeapi.co/api/v2/version-group/13/'},
  {name: 'black-2-white-2', url: 'https://pokeapi.co/api/v2/version-group/14/'},
  {name: 'x-y', url: 'https://pokeapi.co/api/v2/version-group/15/'},
  {name: 'omega-ruby-alpha-sapphire', url: 'https://pokeapi.co/api/v2/version-group/16/'},
  {name: 'sun-moon', url: 'https://pokeapi.co/api/v2/version-group/17/'},
  {name: 'ultra-sun-ultra-moon', url: 'https://pokeapi.co/api/v2/version-group/18/'},
];

@Injectable({
  providedIn: 'root'
})
export class PokemonVersionService {

  public static readonly DEFAULT_VERSION: 'yellow';

  public activeVersion = 'yellow';

  public activeVersion$ = new BehaviorSubject(this.activeVersion);

  constructor() {
  }

  getVersionList(): Observable<ApiNamedResource[]> {
    // return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/version-group').pipe(
    //   tap(serviceLog),
    //   shareReplay()
    // );
    return of(versions);
  }

  setDisplayVersion(version: string): void {
    if (versions.findIndex(value => value.name === version) > -1) {
      this.activeVersion = version;
      this.activeVersion$.next(this.activeVersion);
    }
  }

  filterWithFallback<T>(versionList: T[]): T[] {
    let requested = this.filter(versionList);
    if (requested.length === 0) {
      requested = versionList.filter((value: any) => value.version_group.name === PokemonVersionService.DEFAULT_VERSION);
    }
    return requested.length > 0 ? requested : versionList;
  }

  filter<T>(versionList: T[]): T[] {
    return versionList.filter((value: any) => value.version_group.name === this.activeVersion);
  }

  matchesDisplayVersion(version: string): boolean {
    return this.activeVersion === version;
  }
}
