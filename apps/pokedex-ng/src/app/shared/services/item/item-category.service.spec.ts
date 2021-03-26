import { TestBed } from '@angular/core/testing';

import { ItemCategoryService } from './item-category.service';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { stubLanguageServiceProvider } from '../stubs';

describe('ItemCategoryService', () => {
  let service: ItemCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(ItemCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
