import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Species } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpeciesService {
  constructor(private httpClient: HttpClient) {}

  getPokemonSpecies(speciesId: string | number): Observable<Species> {
    return this.httpClient
      .get<Species>(environment.apiUrl + '/pokemon-species/' + speciesId)
      .pipe(tap(serviceLog), shareReplay());
  }
}

export class PokemonSpeciesStubService implements Partial<PokemonSpeciesService> {}

export const pokemonSpeciesStubServiceProvider = {
  provide: PokemonSpeciesService,
  useFactory: () => new PokemonSpeciesStubService(),
};
