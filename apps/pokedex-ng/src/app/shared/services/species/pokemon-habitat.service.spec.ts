import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { PokemonHabitatService } from './pokemon-habitat.service';

describe('PokemonHabitatService', () => {
  let service: PokemonHabitatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(PokemonHabitatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
