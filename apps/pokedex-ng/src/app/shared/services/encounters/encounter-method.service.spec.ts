import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';

import { EncounterMethodService } from './encounter-method.service';

describe('EncounterMethodService', () => {
  let service: EncounterMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule, getTranslocoModule()] });
    service = TestBed.inject(EncounterMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
