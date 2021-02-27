import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EvolutionChain } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EvolutionChainService {
  constructor(private httpClient: HttpClient) {}

  getEvolutionChain(evolutionChainId: number): Observable<EvolutionChain> {
    return this.httpClient.get<EvolutionChain>('api/evolution-chain/' + evolutionChainId).pipe(take(1));
  }
}
