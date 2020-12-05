import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokemonSpeciesService } from './pokemon-species.service';
import { PokemonService } from './pokemon.service';
import { of } from 'rxjs';

describe('PokemonSpeciesService', () => {
  let service: PokemonSpeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonSpeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class PokemonSpeciesServiceStub implements Partial<PokemonSpeciesService> {}

export const pokemonSpeciesServiceStubProvider = {
  provide: PokemonSpeciesService,
  useFactory: () => new PokemonSpeciesServiceStub(),
};
