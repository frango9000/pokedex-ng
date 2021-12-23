import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { ItemAttributeService } from './item-attribute.service';

describe('ItemAttributeService', () => {
  let service: ItemAttributeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(ItemAttributeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
