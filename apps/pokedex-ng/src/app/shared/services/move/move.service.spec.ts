import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { stubLanguageServiceProvider, stubVersionGroupServiceProvider } from '../stubs';
import { MoveService } from './move.service';
import { stubMoveServiceProvider } from './move.service.stubs';

describe('MoveService', () => {
  let service: MoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubMoveServiceProvider, stubLanguageServiceProvider, stubVersionGroupServiceProvider],
    });
    service = TestBed.inject(MoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
