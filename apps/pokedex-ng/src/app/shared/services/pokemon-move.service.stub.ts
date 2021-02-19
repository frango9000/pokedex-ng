import { of } from 'rxjs';
import { PokemonMoveService } from './pokemon-move.service';

export class PokemonMoveStubService implements Partial<PokemonMoveService> {
  public getMoves = jest.fn(() => of([]));
  public getApiMove = jest.fn(() => of(null));
  public getAbility = jest.fn(() => of(null));
}

export const pokemonMoveStubServiceProvider = {
  provide: PokemonMoveService,
  useFactory: () => new PokemonMoveStubService(),
};
