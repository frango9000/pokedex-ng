import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PokemonMoves } from '../../../../shared/domain/pokemon';
import { pokemonMoveServiceStubProvider } from '../../../../shared/services/pokemon-move.service.spec';
import { pokemonServiceStubProvider } from '../../../../shared/services/pokemon-version.service.spec';
import { PokemonMovesCardComponentStub } from './pokemon-moves-card/pokemon-moves-card.component.spec';

import { PokemonMovesComponent } from './pokemon-moves.component';

describe('PokemonMovesComponent', () => {
  let component: PokemonMovesComponent;
  let fixture: ComponentFixture<PokemonMovesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PokemonMovesComponent, PokemonMovesCardComponentStub],
        providers: [pokemonServiceStubProvider, pokemonMoveServiceStubProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-moves', template: '' })
export class PokemonMovesComponentStub implements Partial<PokemonMovesComponent> {
  @Input() pokemonMoves: PokemonMoves[];
}
