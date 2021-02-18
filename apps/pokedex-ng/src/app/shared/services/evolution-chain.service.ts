import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EvolutionChain } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class EvolutionChainService {
  constructor(private httpClient: HttpClient) {}

  getEvolutionChain(evolutionChainId: number): Observable<EvolutionChain> {
    return this.httpClient
      .get<EvolutionChain>(environment.apiUrl + '/evolution-chain/' + evolutionChainId)
      .pipe(tap(serviceLog), shareReplay());
  }
}
