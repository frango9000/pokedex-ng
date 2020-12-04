import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from '../../../../../shared/shared.module';
import { PokemonMoveComponent } from '../pokemon-move/pokemon-move.component';

import { PokemonMovesCardComponent } from './pokemon-moves-card.component';

describe('PokemonMovesCardComponent', () => {
  let component: PokemonMovesCardComponent;
  let fixture: ComponentFixture<PokemonMovesCardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
          MDBBootstrapModule.forRoot(),
          SharedModule,
        ],
        declarations: [PokemonMovesCardComponent, PokemonMoveComponent],
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
