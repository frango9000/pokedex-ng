import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { EvolutionTriggerService } from './evolution-trigger.service';

describe('EvolutionTriggerService', () => {
  let service: EvolutionTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(EvolutionTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
