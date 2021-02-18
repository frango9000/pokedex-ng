import { of } from 'rxjs';
import { PokemonService } from './pokemon.service';

export class StubPokemonService implements Partial<PokemonService> {
  public getAllPokemon = jest.fn(() => of([]));
}

export const stubPokemonServiceProvider = {
  provide: PokemonService,
  useFactory: () => new StubPokemonService(),
};
