import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { PokemonShapeService } from './pokemon-shape.service';

describe('PokemonShapeService', () => {
  let service: PokemonShapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(PokemonShapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
