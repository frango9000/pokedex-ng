import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { MoveCategoryService } from './move-category.service';

describe('MoveCategoryService', () => {
  let service: MoveCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(MoveCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
