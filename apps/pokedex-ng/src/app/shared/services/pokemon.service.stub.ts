import { of } from 'rxjs';
import { PokemonService } from './pokemon.service';

export class StubPokemonService implements Partial<PokemonService> {
  public getAllPokemonLocal = jest.fn(() => of([]));
}

export const stubPokemonServiceProvider = {
  provide: PokemonService,
  useFactory: () => new StubPokemonService(),
};
