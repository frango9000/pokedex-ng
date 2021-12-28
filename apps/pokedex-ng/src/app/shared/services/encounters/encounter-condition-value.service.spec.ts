import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';

import { EncounterConditionValueService } from './encounter-condition-value.service';

describe('EncounterConditionValueService', () => {
  let service: EncounterConditionValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule, getTranslocoModule()] });
    service = TestBed.inject(EncounterConditionValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
