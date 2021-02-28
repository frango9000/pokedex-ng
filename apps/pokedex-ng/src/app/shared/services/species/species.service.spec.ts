import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { stubLanguageServiceProvider, stubVersionGroupServiceProvider } from '../stubs';
import { SpeciesService } from './species.service';

describe('PokemonSpeciesService', () => {
  let service: SpeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [stubVersionGroupServiceProvider, stubLanguageServiceProvider],
    });
    service = TestBed.inject(SpeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
