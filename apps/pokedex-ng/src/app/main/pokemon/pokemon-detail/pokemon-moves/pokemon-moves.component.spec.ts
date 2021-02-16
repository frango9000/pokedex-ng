import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PokemonMoves } from '@pokedex-ng/domain';
import { ExpandableResourcesStubPipe } from '../../../../shared/pipes/expandable-resources.pipe.spec';
import { PokeTypeColorStubPipe } from '../../../../shared/pipes/poke-type-color.pipe.spec';
import { pokemonMoveStubServiceProvider } from '../../../../shared/services/pokemon-move.service.stub';
import { pokemonVersionStubServiceProvider } from '../../../../shared/services/pokemon-version.service.stub';
import { PokemonMovesCardStubComponent } from './pokemon-moves-card/pokemon-moves-card.component.spec';
import { PokemonMovesComponent } from './pokemon-moves.component';

describe('PokemonMovesComponent', () => {
  let component: PokemonMovesComponent;
  let fixture: ComponentFixture<PokemonMovesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          PokemonMovesComponent,
          PokemonMovesCardStubComponent,
          ExpandableResourcesStubPipe,
          PokeTypeColorStubPipe,
        ],
        providers: [pokemonVersionStubServiceProvider, pokemonMoveStubServiceProvider],
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
export class PokemonMovesStubComponent implements Partial<PokemonMovesComponent> {
  @Input() pokemonMoves: PokemonMoves[];
}
