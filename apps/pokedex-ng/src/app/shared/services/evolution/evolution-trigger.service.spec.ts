import { TestBed } from '@angular/core/testing';

import { EvolutionTriggerService } from './evolution-trigger.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { stubLanguageServiceProvider } from '../stubs';

describe('EvolutionTriggerService', () => {
  let service: EvolutionTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(EvolutionTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
