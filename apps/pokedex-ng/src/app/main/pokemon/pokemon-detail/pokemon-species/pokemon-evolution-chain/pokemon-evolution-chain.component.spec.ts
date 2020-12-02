import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonEvolutionChainComponent} from './pokemon-evolution-chain.component';

describe('PokemonEvolutionChainComponent', () => {
  let component: PokemonEvolutionChainComponent;
  let fixture: ComponentFixture<PokemonEvolutionChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonEvolutionChainComponent]
    })
    .compileComponents();
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
