import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { MoveTargetService } from './move-target.service';

describe('MoveTargetService', () => {
  let service: MoveTargetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(MoveTargetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
