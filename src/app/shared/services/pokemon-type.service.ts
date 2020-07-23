import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {shareReplay, tap} from 'rxjs/operators';
import {PokemonType} from '../domain/pokemon-type';
import {ApiNamedResource, ApiResponse} from '../domain/api-resource';
import {serviceLog} from './pokemon.service';

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

  getTypes(): Observable<ApiResponse<ApiNamedResource>> {
    const pageParams: HttpParams = new HttpParams()
    .append('limit', '100');
    return this.httpClient.get<ApiResponse<ApiNamedResource>>(environment.apiUrl + '/type/').pipe(
      tap(serviceLog),
      shareReplay()
    );
  }
}
