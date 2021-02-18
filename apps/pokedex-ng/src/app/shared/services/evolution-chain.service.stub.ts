import { EvolutionChain } from '@pokedex-ng/domain';
import { of } from 'rxjs';
import { EvolutionChainService } from './evolution-chain.service';

export class EvolutionChainStubService implements Partial<EvolutionChainService> {
  public getEvolutionChain = jest.fn(() => of({} as EvolutionChain));
}

export const evolutionChainStubServiceProvider = {
  provide: EvolutionChainService,
  useFactory: () => new EvolutionChainStubService(),
};
