import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonSpecies } from '../../../../../shared/domain/pokemon-species';

import { PokemonEvolutionChainComponent } from './pokemon-evolution-chain.component';

describe('PokemonEvolutionChainComponent', () => {
  let component: PokemonEvolutionChainComponent;
  let fixture: ComponentFixture<PokemonEvolutionChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonEvolutionChainComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEvolutionChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-evolution-chain', template: '' })
export class PokemonEvolutionChainComponentStub {
  @Input() public pokemonSpecies: PokemonSpecies;
}
