import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EvolutionChainLink } from '@pokedex-ng/domain';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Observable, of } from 'rxjs';
import { stubEvolutionChainServiceProvider } from '../../../../../shared/services/stubs';
import { getTranslocoModule } from '../../../../../transloco-testing.module';
import { PokemonEvolutionChainComponent } from './pokemon-evolution-chain.component';
import { PokemonEvolutionLinkComponent } from './pokemon-evolution-link/pokemon-evolution-link.component';

@Component({ selector: 'app-pokemon-evolution-link', template: '' })
export class PokemonEvolutionLinkStubComponent implements Partial<PokemonEvolutionLinkComponent> {
  @Input() link$: Observable<EvolutionChainLink>;
}

describe('PokemonEvolutionChainComponent', () => {
  let component: PokemonEvolutionChainComponent;
  let fixture: ComponentFixture<PokemonEvolutionChainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), MDBBootstrapModule.forRoot()],
      declarations: [PokemonEvolutionChainComponent, PokemonEvolutionLinkStubComponent],
      providers: [stubEvolutionChainServiceProvider],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEvolutionChainComponent);
    component = fixture.componentInstance;
    component.evolutionChainId$ = of(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
