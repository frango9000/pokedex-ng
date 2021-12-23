import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubLanguageServiceProvider } from '../stubs';
import { EggGroupService } from './egg-group.service';

describe('EggGroupService', () => {
  let service: EggGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), HttpClientTestingModule],
      providers: [stubLanguageServiceProvider],
    });
    service = TestBed.inject(EggGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
