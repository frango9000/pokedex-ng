import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ability, Move, NamedApiMove, NamedApiResource } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import moves from '../../../assets/data/moves.json';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonMoveService {
  constructor(private httpClient: HttpClient) {}

  getAbility(abilityId: string | number): Observable<Ability> {
    return this.httpClient
      .get<Ability>(environment.apiUrl + '/ability/' + abilityId)
      .pipe(tap(serviceLog), shareReplay());
  }

  getMoves(): Observable<NamedApiMove[]> {
    return of(moves);
  }

  getApiMoves(): Observable<NamedApiResource[]> {
    const pageParams: HttpParams = new HttpParams().append('limit', String(1000));
    return this.httpClient.get(environment.apiUrl + '/move/', { params: pageParams }).pipe(
      tap(serviceLog),
      map((value) => value.results),
      shareReplay()
    );
  }

  getApiMove(moveId: string | number): Observable<Move> {
    return this.httpClient.get<Move>(environment.apiUrl + '/move/' + moveId).pipe(tap(serviceLog), shareReplay());
  }

  postFirebaseMove(data: NamedApiMove): Observable<any> {
    return this.httpClient.put(environment.firebaseApi + '/move/' + data.id + '.json', data).pipe(tap(serviceLog));
  }

  getFirebaseMoveList(): Observable<NamedApiMove[]> {
    return this.httpClient.get(environment.firebaseApi + '/move.json').pipe(
      map((id) => Object.keys(id).map((move) => id[move])),
      tap(serviceLog),
      shareReplay()
    );
  }
}
