import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GenerationService } from './generation.service';

describe('GenerationService', () => {
  let service: GenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
