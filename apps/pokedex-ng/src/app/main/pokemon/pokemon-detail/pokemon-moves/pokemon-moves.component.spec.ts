import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NamedApiMove, PokemonMoves } from '@pokedex-ng/domain';
import { StubExpandableResourcesPipe, StubPokeTypeColorPipe } from '../../../../shared/pipes/stubs';
import { gameVersionStubServiceProvider } from '../../../../shared/services/game-version.service.stub';
import { pokemonMoveStubServiceProvider } from '../../../../shared/services/pokemon-move.service.stub';
import { PokemonMovesCardComponent } from './pokemon-moves-card/pokemon-moves-card.component';
import { PokemonMovesComponent } from './pokemon-moves.component';

@Component({ selector: 'app-pokemon-moves-card', template: '' })
export class PokemonMovesCardStubComponent implements Partial<PokemonMovesCardComponent> {
  @Input() moves: PokemonMoves[] = [];
  @Input() cardTitle = '';
  @Input() showLevels = false;
  @Input() moveTypes: NamedApiMove[];
}

describe('PokemonMovesComponent', () => {
  let component: PokemonMovesComponent;
  let fixture: ComponentFixture<PokemonMovesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          PokemonMovesComponent,
          PokemonMovesCardStubComponent,
          StubExpandableResourcesPipe,
          StubPokeTypeColorPipe,
        ],
        providers: [gameVersionStubServiceProvider, pokemonMoveStubServiceProvider],
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
