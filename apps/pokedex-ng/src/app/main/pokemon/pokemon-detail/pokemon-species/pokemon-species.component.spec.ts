import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Species } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { stubSpeciesServiceProvider } from '../../../../shared/services/species/species.service.stubs';
import { PokemonEvolutionChainComponent } from './pokemon-evolution-chain/pokemon-evolution-chain.component';
import { PokemonSpeciesInfoComponent } from './pokemon-species-info/pokemon-species-info.component';
import { PokemonSpeciesComponent } from './pokemon-species.component';

@Component({ selector: 'app-pokemon-species-info', template: '' })
class StubPokemonSpeciesInfoComponent implements Partial<PokemonSpeciesInfoComponent> {
  @Input() public species$: Observable<Species>;
}

@Component({ selector: 'app-pokemon-evolution-chain', template: '' })
class StubPokemonEvolutionChainComponent implements Partial<PokemonEvolutionChainComponent> {
  @Input() evolutionChainId$: Observable<number>;
}

describe('PokemonSpeciesComponent', () => {
  let component: PokemonSpeciesComponent;
  let fixture: ComponentFixture<PokemonSpeciesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [PokemonSpeciesComponent, StubPokemonSpeciesInfoComponent, StubPokemonEvolutionChainComponent],
      providers: [stubSpeciesServiceProvider],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSpeciesComponent);
    component = fixture.componentInstance;
    component.pokemon$ = of(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
