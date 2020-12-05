import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PokemonMoves } from '../../../../../shared/domain/pokemon';
import { ApiNamedMove } from '../../../../../shared/domain/pokemon-move';
import { SharedModule } from '../../../../../shared/shared.module';
import { PokemonMoveComponent } from '../pokemon-move/pokemon-move.component';

import { PokemonMovesCardComponent } from './pokemon-moves-card.component';

describe('PokemonMovesCardComponent', () => {
  let component: PokemonMovesCardComponent;
  let fixture: ComponentFixture<PokemonMovesCardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot(), SharedModule],
        declarations: [PokemonMovesCardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMovesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-moves-card', template: '' })
export class PokemonMovesCardComponentStub implements Partial<PokemonMovesCardComponent> {
  @Input() moves: PokemonMoves[] = [];
  @Input() cardTitle = '';
  @Input() showLevels = false;
  @Input() moveTypes: ApiNamedMove[];
}
