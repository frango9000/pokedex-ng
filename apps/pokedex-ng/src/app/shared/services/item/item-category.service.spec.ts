import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { ItemCategoryService } from './item-category.service';

describe('ItemCategoryService', () => {
  let service: ItemCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(ItemCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
