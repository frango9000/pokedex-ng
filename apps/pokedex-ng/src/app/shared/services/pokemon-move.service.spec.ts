import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonMoveService } from './pokemon-move.service';
import { PokemonService } from './pokemon.service';

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

export class PokemonMoveServiceStub implements Partial<PokemonMoveService> {
  public getMoves = jest.fn(() => of([]));
}

export const pokemonMoveServiceStubProvider = {
  provide: PokemonMoveService,
  useFactory: () => new PokemonMoveServiceStub(),
};
