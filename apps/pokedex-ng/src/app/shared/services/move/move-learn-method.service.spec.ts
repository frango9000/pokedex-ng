import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { stubLanguageServiceProvider } from '../stubs';

import { MoveLearnMethodService } from './move-learn-method.service';

describe('MoveLearnMethodService', () => {
  let service: MoveLearnMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(MoveLearnMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
