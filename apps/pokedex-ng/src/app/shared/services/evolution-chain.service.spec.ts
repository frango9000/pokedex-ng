import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EvolutionChainService } from './evolution-chain.service';

describe('EvolutionChainService', () => {
  let service: EvolutionChainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EvolutionChainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
