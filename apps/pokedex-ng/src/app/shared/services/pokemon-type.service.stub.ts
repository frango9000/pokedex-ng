import { of } from 'rxjs';
import { PokemonTypeService } from './pokemon-type.service';

export class PokemonTypeStubService implements Partial<PokemonTypeService> {
  getOneTypeLocal = jest.fn(() => of(null));
  getAllTypesLocal = jest.fn(() => of([]));
}

export const pokemonTypeStubServiceProvider = {
  provide: PokemonTypeService,
  useFactory: () => new PokemonTypeStubService(),
};
