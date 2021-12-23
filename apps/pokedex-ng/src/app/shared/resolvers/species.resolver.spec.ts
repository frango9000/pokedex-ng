import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { stubSpeciesServiceProvider } from '../services/species/species.service.stubs';
import { SpeciesResolver } from './species.resolver';

describe('SpeciesResolver', () => {
  let resolver: SpeciesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [stubSpeciesServiceProvider],
    });
    resolver = TestBed.inject(SpeciesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
