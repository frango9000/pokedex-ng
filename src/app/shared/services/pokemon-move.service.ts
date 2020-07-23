import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {shareReplay, tap} from 'rxjs/operators';
import {PokemonAbility} from '../domain/pokemon-ability';
import {PokemonMove} from '../domain/pokemon-move';
import {serviceLog} from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonMoveService {

  constructor(private httpClient: HttpClient) {
  }

  getAbility(abilityId: string | number): Observable<PokemonAbility> {
    return this.httpClient.get<PokemonAbility>(environment.apiUrl + '/ability/' + abilityId).pipe(
      tap(serviceLog),
      shareReplay()
    );
  }

  getMove(moveId: string | number): Observable<PokemonMove> {
    return this.httpClient.get<PokemonMove>(environment.apiUrl + '/move/' + moveId).pipe(
      tap(serviceLog),
      shareReplay()
    );
  }
}
