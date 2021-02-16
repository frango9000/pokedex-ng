import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokemonVersionService } from './pokemon-version.service';

describe('PokemonVersionService', () => {
  let service: PokemonVersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonVersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
