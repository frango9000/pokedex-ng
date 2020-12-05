import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonEvolutionChainLink } from '../../../../../../shared/domain/pokemon-evolution-chain';

import { PokemonEvolutionLinkComponent } from './pokemon-evolution-link.component';

describe('PokemonEvolutionLinkComponent', () => {
  let component: PokemonEvolutionLinkComponent;
  let fixture: ComponentFixture<PokemonEvolutionLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonEvolutionLinkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEvolutionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-evolution-link', template: '' })
export class PokemonEvolutionLinkComponentStub implements Partial<PokemonEvolutionLinkComponent> {
  @Input() link: PokemonEvolutionChainLink;
}
