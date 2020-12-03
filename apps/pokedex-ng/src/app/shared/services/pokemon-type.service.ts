import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, shareReplay, tap } from 'rxjs/operators';
import { ApiNamedType, PokemonType } from '../domain/pokemon-type';
import { ApiNamedResource, ApiResponse } from '../domain/api-resource';
import { serviceLog } from './cache/icache';
import types from '../../../assets/data/types.json';

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
    return this.getTypes().pipe(
      map((value) => value.find((value1) => value1.name === typeId))
    );
  }

  getApiTypes(): Observable<ApiNamedResource[]> {
    const pageParams: HttpParams = new HttpParams().append('limit', '100');
    return this.httpClient
      .get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/type/')
      .pipe(
        map((value) => value.results),
        tap(serviceLog),
        shareReplay()
      );
  }
}
