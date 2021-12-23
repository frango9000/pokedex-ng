import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { MoveDamageClassService } from './move-damage-class.service';

describe('MoveDamageClassService', () => {
  let service: MoveDamageClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(MoveDamageClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
