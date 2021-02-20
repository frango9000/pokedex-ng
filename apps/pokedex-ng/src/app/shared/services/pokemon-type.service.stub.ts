import { of } from 'rxjs';
import { PokemonTypeService } from './pokemon-type.service';

export class PokemonTypeStubService implements Partial<PokemonTypeService> {
  getOneType = jest.fn(() => of(null));
  getAllTypes = jest.fn(() => of([]));
}

export const pokemonTypeStubServiceProvider = {
  provide: PokemonTypeService,
  useFactory: () => new PokemonTypeStubService(),
};
