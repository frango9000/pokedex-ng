import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { stubLanguageServiceProvider } from '../stubs';

import { EggGroupService } from './egg-group.service';

describe('EggGroupService', () => {
  let service: EggGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(EggGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
