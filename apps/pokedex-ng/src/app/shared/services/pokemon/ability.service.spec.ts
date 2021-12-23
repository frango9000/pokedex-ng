import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { AbilityService } from './ability.service';

describe('AbilityService', () => {
  let service: AbilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
    });
    service = TestBed.inject(AbilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
