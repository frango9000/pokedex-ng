import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokemonEvolutionChainService } from './pokemon-evolution-chain.service';

describe('PokemonEvolutionChainService', () => {
  let service: PokemonEvolutionChainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonEvolutionChainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
