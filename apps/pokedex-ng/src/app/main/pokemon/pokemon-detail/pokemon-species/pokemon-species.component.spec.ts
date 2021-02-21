import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Species } from '@pokedex-ng/domain';
import { stubSpeciesServiceProvider } from '../../../../shared/services/stubs';
import { PokemonSpeciesInfoComponent } from './pokemon-species-info/pokemon-species-info.component';
import { PokemonSpeciesComponent } from './pokemon-species.component';

@Component({ selector: 'app-pokemon-species-info', template: '' })
export class StubPokemonSpeciesInfoComponent implements Partial<PokemonSpeciesInfoComponent> {
  @Input() public pokemonSpecies: Species;
}

@Component({ selector: 'app-pokemon-evolution-chain', template: '' })
export class StubPokemonEvolutionChainComponent {
  @Input() public pokemonSpecies: Species;
}

describe('PokemonSpeciesComponent', () => {
  let component: PokemonSpeciesComponent;
  let fixture: ComponentFixture<PokemonSpeciesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [PokemonSpeciesComponent, StubPokemonSpeciesInfoComponent, StubPokemonEvolutionChainComponent],
        providers: [stubSpeciesServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
