import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonTypeService } from './pokemon-type.service';
import { PokemonService } from './pokemon.service';

describe('PokemonTypeService', () => {
  let service: PokemonTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class PokemonTypeServiceStub implements Partial<PokemonTypeService> {
  getType = jest.fn(() => of(null));
  getTypes = jest.fn(() => of([]));
}

export const pokemonTypeServiceStubProvider = {
  provide: PokemonTypeService,
  useFactory: () => new PokemonTypeServiceStub(),
};
