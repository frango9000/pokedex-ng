import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonMoveService } from './pokemon-move.service';

describe('PokemonMoveService', () => {
  let service: PokemonMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class PokemonMoveServiceStub implements Partial<PokemonMoveService> {
  public getMoves = jest.fn(() => of([]));
  public getApiMove = jest.fn(() => of(null));
  public getAbility = jest.fn(() => of(null));
}

export const pokemonMoveServiceStubProvider = {
  provide: PokemonMoveService,
  useFactory: () => new PokemonMoveServiceStub(),
};
