import { TestBed } from '@angular/core/testing';

import { AppInitService } from './app-init.service';
import { stubPokemonLanguageServiceProvider } from './shared/services/pokemon-language.service.stub';
import { pokemonTypeStubServiceProvider } from './shared/services/pokemon-type.service.stub';

describe('AppInitService', () => {
  let service: AppInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [stubPokemonLanguageServiceProvider, pokemonTypeStubServiceProvider],
    });
    service = TestBed.inject(AppInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
