import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PokemonSpecies } from '../domain/pokemon-species';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpeciesService {
  constructor(private httpClient: HttpClient) {}

  getPokemonSpecies(speciesId: string | number): Observable<PokemonSpecies> {
    return this.httpClient
      .get<PokemonSpecies>(environment.apiUrl + '/pokemon-species/' + speciesId)
      .pipe(tap(serviceLog), shareReplay());
  }
}
export class PokemonSpeciesStubService implements Partial<PokemonSpeciesService> {}
export const pokemonSpeciesStubServiceProvider = {
  provide: PokemonSpeciesService,
  useFactory: () => new PokemonSpeciesStubService(),
};
