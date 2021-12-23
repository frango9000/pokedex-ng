import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { PokemonColorService } from './pokemon-color.service';

describe('PokemonColorService', () => {
  let service: PokemonColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(PokemonColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
