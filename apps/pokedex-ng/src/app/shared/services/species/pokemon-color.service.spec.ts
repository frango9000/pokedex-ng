import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { stubLanguageServiceProvider } from '../stubs';

import { PokemonColorService } from './pokemon-color.service';

describe('PokemonColorService', () => {
  let service: PokemonColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(PokemonColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
