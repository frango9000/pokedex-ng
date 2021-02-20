import { of } from 'rxjs';
import { PokemonMoveService } from './pokemon-move.service';

export class PokemonMoveStubService implements Partial<PokemonMoveService> {
  public getAllMoves = jest.fn(() => of([]));
  public apiOneMove = jest.fn(() => of(null));
  public apiOneAbility = jest.fn(() => of(null));
}

export const pokemonMoveStubServiceProvider = {
  provide: PokemonMoveService,
  useFactory: () => new PokemonMoveStubService(),
};
