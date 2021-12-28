import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';

import { EncounterConditionService } from './encounter-condition.service';

describe('EncounterConditionService', () => {
  let service: EncounterConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule, getTranslocoModule()] });
    service = TestBed.inject(EncounterConditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
