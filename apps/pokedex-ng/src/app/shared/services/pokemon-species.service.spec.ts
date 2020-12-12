import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokemonSpeciesService } from './pokemon-species.service';

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
