import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PokemonLanguageService } from './pokemon-language.service';

describe('PokemonLanguageService', () => {
  let service: PokemonLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
    });
    service = TestBed.inject(PokemonLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class PokemonLanguageServiceStub implements Partial<PokemonLanguageService> {}

export const pokemonLanguageServiceStubProvider = {
  provide: PokemonLanguageService,
  useFactory: () => new PokemonLanguageServiceStub(),
};
