import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import types from '../../../assets/data/types.json';
import { environment } from '../../../environments/environment';
import { ApiNamedResource, ApiResponse } from '../domain/api-resource';
import { ApiNamedType, PokemonType } from '../domain/pokemon-type';
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

  getTypes(): Observable<ApiNamedResource[]> {
    return of(types);
  }

  getType(typeId: string): Observable<ApiNamedType> {
    return this.getTypes().pipe(map((value) => value.find((value1) => value1.name === typeId)));
  }

  getApiTypes(): Observable<ApiNamedResource[]> {
    // const pageParams: HttpParams = new HttpParams().append('limit', '100');
    return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/type/').pipe(
      map((value) => value.results),
      tap(serviceLog),
      shareReplay()
    );
  }
}
