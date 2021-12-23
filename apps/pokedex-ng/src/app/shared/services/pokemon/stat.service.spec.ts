import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { StatService } from './stat.service';

describe('StatService', () => {
  let service: StatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, getTranslocoModule()],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(StatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
