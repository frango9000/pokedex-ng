import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {shareReplay, tap} from 'rxjs/operators';
import {PokemonEvolutionChain} from '../domain/pokemon-evolution-chain';
import {serviceLog} from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonEvolutionChainService {

  constructor(private httpClient: HttpClient) {
  }


  getEvolutionChain(evolutionChainId: number): Observable<PokemonEvolutionChain> {
    return this.httpClient.get<PokemonEvolutionChain>(environment.apiUrl + '/evolution-chain/' + evolutionChainId).pipe(
      tap(serviceLog),
      shareReplay()
    );
  }
}
