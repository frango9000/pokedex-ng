import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { ItemPocketService } from './item-pocket.service';

describe('ItemPocketService', () => {
  let service: ItemPocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(ItemPocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
