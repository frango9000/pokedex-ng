import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { stubLanguageServiceProvider } from '../stubs';

import { GrowthRateService } from './growth-rate.service';

describe('GrowthRateService', () => {
  let service: GrowthRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(GrowthRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
