import { BehaviorSubject, of } from 'rxjs';
import { PokemonVersionService } from './pokemon-version.service';

export class PokemonVersionStubService implements Partial<PokemonVersionService> {
  public activeVersion$ = new BehaviorSubject('');
  public matchesDisplayVersion = jest.fn((string) => string === 'true');
  public getVersionList = jest.fn(() => of([]));
}

export const pokemonVersionStubServiceProvider = {
  provide: PokemonVersionService,
  useFactory: () => new PokemonVersionStubService(),
};
