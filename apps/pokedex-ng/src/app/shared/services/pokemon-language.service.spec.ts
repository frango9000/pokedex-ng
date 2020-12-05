import { TestBed } from '@angular/core/testing';
import { PokemonLanguageService } from './pokemon-language.service';

describe('PokemonLanguageService', () => {
  let service: PokemonLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
