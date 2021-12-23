import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { GrowthRateService } from './growth-rate.service';

describe('GrowthRateService', () => {
  let service: GrowthRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(GrowthRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
