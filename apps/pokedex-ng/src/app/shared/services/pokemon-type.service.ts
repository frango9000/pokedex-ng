import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NamedApiPokemonType, NamedApiResource, NamedAPIResourceList, PokemonType } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import types from '../../../assets/data/types.json';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeService {
  constructor(public httpClient: HttpClient) {}

  getApiType(typeId: string | number): Observable<PokemonType> {
    return this.httpClient
      .get<PokemonType>(environment.apiUrl + '/type/' + typeId)
      .pipe(tap(serviceLog), shareReplay());
  }

  getTypes(): Observable<NamedApiResource[]> {
    return of(types);
  }

  getType(typeId: string): Observable<NamedApiPokemonType> {
    return this.getTypes().pipe(map((value) => value.find((value1) => value1.name === typeId)));
  }

  getApiTypes(): Observable<NamedApiResource[]> {
    // const pageParams: HttpParams = new HttpParams().append('limit', '100');
    return this.httpClient.get<NamedAPIResourceList<NamedApiResource>>(environment.apiUrl + '/type/').pipe(
      map((value) => value.results),
      tap(serviceLog),
      shareReplay()
    );
  }
}
