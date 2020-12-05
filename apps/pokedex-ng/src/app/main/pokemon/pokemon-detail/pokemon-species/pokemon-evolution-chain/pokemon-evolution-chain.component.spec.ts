import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PokemonSpecies } from '../../../../../shared/domain/pokemon-species';
import { pokemonEvolutionChainServiceStubProvider } from '../../../../../shared/services/pokemon-evolution-chain.service.spec';

import { PokemonEvolutionChainComponent } from './pokemon-evolution-chain.component';
import { PokemonEvolutionLinkComponentStub } from './pokemon-evolution-link/pokemon-evolution-link.component.spec';

describe('PokemonEvolutionChainComponent', () => {
  let component: PokemonEvolutionChainComponent;
  let fixture: ComponentFixture<PokemonEvolutionChainComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonEvolutionChainComponent, PokemonEvolutionLinkComponentStub],
        providers: [pokemonEvolutionChainServiceStubProvider],
      }).compileComponents();
    })
  );

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
