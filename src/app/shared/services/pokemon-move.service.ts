import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {PokemonAbility} from '../domain/pokemon-ability';

@Injectable({
  providedIn: 'root'
})
export class PokemonMoveService {

  constructor(private httpClient: HttpClient) {
  }

  getAbility(abilityId: string | number): Observable<PokemonAbility> {
    return this.httpClient.get<PokemonAbility>(environment.apiUrl + '/ability/' + abilityId).pipe(
      tap(source => console.log(source))
    );
  }
}
