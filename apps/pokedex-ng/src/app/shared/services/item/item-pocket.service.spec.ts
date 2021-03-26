import { TestBed } from '@angular/core/testing';

import { ItemPocketService } from './item-pocket.service';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { stubLanguageServiceProvider } from '../stubs';

describe('ItemPocketService', () => {
  let service: ItemPocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(ItemPocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
