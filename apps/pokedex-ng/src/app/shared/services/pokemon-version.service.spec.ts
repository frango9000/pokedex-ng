import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { PokemonVersionService } from './pokemon-version.service';

describe('PokemonVersionService', () => {
  let service: PokemonVersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonVersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class PokemonVersionServiceStub implements Partial<PokemonVersionService> {
  public activeVersion$ = new BehaviorSubject('');
  public matchesDisplayVersion = jest.fn((string) => string === 'true');
}

export const pokemonServiceStubProvider = {
  provide: PokemonVersionService,
  useFactory: () => new PokemonVersionServiceStub(),
};
