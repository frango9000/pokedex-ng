import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {shareReplay, tap} from 'rxjs/operators';
import {PokemonType} from '../domain/pokemon-type';
import {ApiNamedResource} from '../domain/api-resource';
import {serviceLog} from './cache/icache';

export const moves: ApiNamedResource[] = [
  {name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/'},
  {name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/'},
  {name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/'},
  {name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/'},
  {name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/'},
  {name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/'},
  {name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/'},
  {name: 'ghost', url: 'https://pokeapi.co/api/v2/type/8/'},
  {name: 'steel', url: 'https://pokeapi.co/api/v2/type/9/'},
  {name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/'},
  {name: 'water', url: 'https://pokeapi.co/api/v2/type/11/'},
  {name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/'},
  {name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/'},
  {name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/'},
  {name: 'ice', url: 'https://pokeapi.co/api/v2/type/15/'},
  {name: 'dragon', url: 'https://pokeapi.co/api/v2/type/16/'},
  {name: 'dark', url: 'https://pokeapi.co/api/v2/type/17/'},
  {name: 'fairy', url: 'https://pokeapi.co/api/v2/type/18/'},
  {name: 'unknown', url: 'https://pokeapi.co/api/v2/type/10001/'},
  {name: 'shadow', url: 'https://pokeapi.co/api/v2/type/10002/'}
];

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {

  constructor(public httpClient: HttpClient) {
  }

  getType(typeId: string | number): Observable<PokemonType> {
    return this.httpClient.get<PokemonType>(environment.apiUrl + '/type/' + typeId).pipe(
      tap(serviceLog),
      shareReplay()
    );
  }

  getTypes(): Observable<ApiNamedResource[]> {
    // const pageParams: HttpParams = new HttpParams()
    // .append('limit', '100');
    // return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/type/').pipe(
    //   tap(serviceLog),
    //   shareReplay()
    // );
    return of(moves);
  }
}
