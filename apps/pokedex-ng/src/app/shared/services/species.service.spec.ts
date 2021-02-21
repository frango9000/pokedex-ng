import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SpeciesService } from './species.service';
import { stubGameVersionServiceProvider, stubLanguageServiceProvider } from './stubs';

describe('PokemonSpeciesService', () => {
  let service: SpeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [stubGameVersionServiceProvider, stubLanguageServiceProvider],
    });
    service = TestBed.inject(SpeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
