import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Pokemon, PokemonMoves } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import {
  StubExpandableResourcesPipe,
  StubPokeTypeColorPipe,
  StubWithVersionGroupPipe,
} from '../../../../shared/pipes/stubs';
import { stubMoveServiceProvider } from '../../../../shared/services/move/move.service.stubs';
import { stubVersionGroupServiceProvider } from '../../../../shared/services/stubs';
import { PokemonMovesCardComponent } from './pokemon-moves-card/pokemon-moves-card.component';
import { PokemonMovesComponent } from './pokemon-moves.component';

@Component({ selector: 'app-pokemon-moves-card', template: '' })
export class PokemonMovesCardStubComponent implements Partial<PokemonMovesCardComponent> {
  @Input() moves$: Observable<PokemonMoves[]> = of([]);
  @Input() cardTitle = '';
  @Input() showLevels = false;
}

const mockPokemon: Pokemon = {
  abilities: [],
  base_experience: 0,
  forms: [],
  game_indices: [],
  height: 0,
  held_items: [],
  id: 0,
  is_default: false,
  location_area_encounters: [],
  moves: [],
  name: '',
  order: 0,
  species: undefined,
  sprites: undefined,
  stats: [],
  types: [],
  weight: 0,
};

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
          StubWithVersionGroupPipe,
        ],
        providers: [stubVersionGroupServiceProvider, stubMoveServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMovesComponent);
    component = fixture.componentInstance;
    component.pokemon$ = of(mockPokemon);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
