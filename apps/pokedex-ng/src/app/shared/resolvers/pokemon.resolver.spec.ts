import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { stubPokemonServiceProvider } from '../services/pokemon/pokemon.service.stubs';
import { PokemonResolver } from './pokemon.resolver';

describe('PokemonResolver', () => {
  let resolver: PokemonResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [stubPokemonServiceProvider],
    });
    resolver = TestBed.inject(PokemonResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
