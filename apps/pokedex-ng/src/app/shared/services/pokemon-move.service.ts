import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ability, Move, NamedApiMove, NamedApiResource } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonMoveService {
  constructor(private httpClient: HttpClient) {
    console.log('Startng move services');
  }

  getAllMoves(): Observable<NamedApiMove[]> {
    return this.httpClient.get<NamedApiMove[]>(environment.baseHref + '/assets/data/move.json').pipe(take(1));
  }

  apiAllMoves(): Observable<NamedApiResource[]> {
    const pageParams: HttpParams = new HttpParams().append('limit', String(1000));
    return this.httpClient.get(environment.apiUrl + '/move/', { params: pageParams }).pipe(
      tap(serviceLog),
      shareReplay(),
      map((value) => value.results)
    );
  }

  apiOneMove(moveId: string | number): Observable<Move> {
    return this.httpClient.get<Move>(environment.apiUrl + '/move/' + moveId).pipe(tap(serviceLog), shareReplay());
  }

  apiOneAbility(abilityId: string | number): Observable<Ability> {
    return this.httpClient
      .get<Ability>(environment.apiUrl + '/ability/' + abilityId)
      .pipe(tap(serviceLog), shareReplay());
  }
}
