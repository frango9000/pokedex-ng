import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { stubLanguageServiceProvider } from '../stubs';

import { PokemonHabitatService } from './pokemon-habitat.service';

describe('PokemonHabitatService', () => {
  let service: PokemonHabitatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(PokemonHabitatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
