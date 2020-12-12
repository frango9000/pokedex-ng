import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
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

export class PokemonVersionStubService implements Partial<PokemonVersionService> {
  public activeVersion$ = new BehaviorSubject('');
  public matchesDisplayVersion = jest.fn((string) => string === 'true');
  public getVersionList = jest.fn(() => of([]));
}

export const pokemonVersionStubServiceProvider = {
  provide: PokemonVersionService,
  useFactory: () => new PokemonVersionStubService(),
};
