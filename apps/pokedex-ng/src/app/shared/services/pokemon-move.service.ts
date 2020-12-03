import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, shareReplay, tap } from 'rxjs/operators';
import { PokemonAbility } from '../domain/pokemon-ability';
import { ApiNamedMove, PokemonMove } from '../domain/pokemon-move';
import { ApiNamedResource } from '../domain/api-resource';
import moves from '../../../assets/data/moves.json';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonMoveService {
  constructor(private httpClient: HttpClient) {}

  getAbility(abilityId: string | number): Observable<PokemonAbility> {
    return this.httpClient
      .get<PokemonAbility>(environment.apiUrl + '/ability/' + abilityId)
      .pipe(tap(serviceLog), shareReplay());
  }

  getMoves(): Observable<ApiNamedMove[]> {
    return of(moves);
  }

  getApiMoves(): Observable<ApiNamedResource[]> {
    const pageParams: HttpParams = new HttpParams().append(
      'limit',
      String(1000)
    );
    return this.httpClient
      .get(environment.apiUrl + '/move/', { params: pageParams })
      .pipe(
        tap(serviceLog),
        map((value) => value.results),
        shareReplay()
      );
  }

  getApiMove(moveId: string | number): Observable<PokemonMove> {
    return this.httpClient
      .get<PokemonMove>(environment.apiUrl + '/move/' + moveId)
      .pipe(tap(serviceLog), shareReplay());
  }

  postFirebaseMove(data: ApiNamedMove): Observable<any> {
    return this.httpClient
      .put(environment.firebaseApi + '/move/' + data.id + '.json', data)
      .pipe(tap(serviceLog));
  }

  getFirebaseMoveList(): Observable<ApiNamedMove[]> {
    return this.httpClient.get(environment.firebaseApi + '/move.json').pipe(
      map((id) => Object.keys(id).map((move) => id[move])),
      tap(serviceLog),
      shareReplay()
    );
  }
}
