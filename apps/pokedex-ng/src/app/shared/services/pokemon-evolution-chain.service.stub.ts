import { EvolutionChain } from '@pokedex-ng/domain';
import { of } from 'rxjs';
import { PokemonEvolutionChainService } from './pokemon-evolution-chain.service';

export class PokemonEvolutionChainStubService implements Partial<PokemonEvolutionChainService> {
  public getEvolutionChain = jest.fn(() => of({} as EvolutionChain));
}

export const pokemonEvolutionChainStubServiceProvider = {
  provide: PokemonEvolutionChainService,
  useFactory: () => new PokemonEvolutionChainStubService(),
};
