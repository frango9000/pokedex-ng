import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NamedApiPokemonType, NamedApiResource, NamedApiResourceList, PokemonType } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeService {
  constructor(public httpClient: HttpClient) {}

  getAllTypes(): Observable<NamedApiPokemonType[]> {
    return this.httpClient.get<NamedApiPokemonType[]>('/assets/data/type.json').pipe(take(1));
  }

  getOneType(typeId: string | number): Observable<NamedApiPokemonType> {
    return this.getAllTypes().pipe(map((value) => value.find((value1) => value1.name === typeId)));
  }

  apiAllTypes(offset = 0, limit = 100): Observable<NamedApiResource[]> {
    const params: HttpParams = new HttpParams().append('limit', String(limit)).append('offset', String(offset));
    return this.httpClient
      .get<NamedApiResourceList>(environment.apiUrl + '/type', { params })
      .pipe(
        map((value) => value.results),
        tap(serviceLog),
        shareReplay()
      );
  }

  apiOneType(typeId: string | number): Observable<PokemonType> {
    return this.httpClient
      .get<PokemonType>(environment.apiUrl + '/type/' + typeId)
      .pipe(tap(serviceLog), shareReplay());
  }
}
