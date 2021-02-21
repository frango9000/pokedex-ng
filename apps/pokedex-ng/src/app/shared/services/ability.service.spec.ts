import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AbilityService } from './ability.service';

describe('AbilityService', () => {
  let service: AbilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    });
    service = TestBed.inject(AbilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
