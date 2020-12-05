import { TestBed } from '@angular/core/testing';
import { PokemonMoveService } from './pokemon-move.service';

describe('PokemonMoveService', () => {
  let service: PokemonMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
