import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PokemonEvolutionChain } from '../domain/pokemon-evolution-chain';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonEvolutionChainService {
  constructor(private httpClient: HttpClient) {}

  getEvolutionChain(
    evolutionChainId: number
  ): Observable<PokemonEvolutionChain> {
    return this.httpClient
      .get<PokemonEvolutionChain>(
        environment.apiUrl + '/evolution-chain/' + evolutionChainId
      )
      .pipe(tap(serviceLog), shareReplay());
  }
}
