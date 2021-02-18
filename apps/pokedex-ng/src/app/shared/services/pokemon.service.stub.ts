import { of } from 'rxjs';
import { PokemonService } from './pokemon.service';

export class PokemonStubService implements Partial<PokemonService> {
  public getAllPokemon = jest.fn(() => of([]));
}

export const pokemonStubServiceProvider = {
  provide: PokemonService,
  useFactory: () => new PokemonStubService(),
};
