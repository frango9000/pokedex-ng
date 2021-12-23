import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { MoveLearnMethodService } from './move-learn-method.service';

describe('MoveLearnMethodService', () => {
  let service: MoveLearnMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(MoveLearnMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
