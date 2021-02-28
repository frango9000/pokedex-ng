import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { stubLanguageServiceProvider, stubMoveServiceProvider, stubVersionGroupServiceProvider } from '../stubs';
import { MoveService } from './move.service';

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
