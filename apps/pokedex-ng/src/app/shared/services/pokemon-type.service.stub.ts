import { of } from 'rxjs';
import { PokemonTypeService } from './pokemon-type.service';

export class PokemonTypeStubService implements Partial<PokemonTypeService> {
  getType = jest.fn(() => of(null));
  getTypes = jest.fn(() => of([]));
}

export const pokemonTypeStubServiceProvider = {
  provide: PokemonTypeService,
  useFactory: () => new PokemonTypeStubService(),
};
