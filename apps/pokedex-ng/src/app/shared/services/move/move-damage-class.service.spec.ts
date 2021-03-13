import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { stubLanguageServiceProvider } from '../stubs';

import { MoveDamageClassService } from './move-damage-class.service';

describe('MoveDamageClassService', () => {
  let service: MoveDamageClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(MoveDamageClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
