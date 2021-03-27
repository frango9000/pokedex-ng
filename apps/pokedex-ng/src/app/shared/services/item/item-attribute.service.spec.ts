import { TestBed } from '@angular/core/testing';

import { ItemAttributeService } from './item-attribute.service';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { stubLanguageServiceProvider } from '../stubs';

describe('ItemAttributeService', () => {
  let service: ItemAttributeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(ItemAttributeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
