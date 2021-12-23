import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { MoveAilmentService } from './move-ailment.service';

describe('MoveAilmentService', () => {
  let service: MoveAilmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(MoveAilmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
