import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EvolutionChain } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root',
})
export class EvolutionChainService extends BaseService<EvolutionChain, EvolutionChain> {
  constructor(protected http: HttpClient) {
    super('evolution-chain', http);
  }

  protected _fetchAll(): Observable<EvolutionChain[]> {
    return of([]);
  }
}
