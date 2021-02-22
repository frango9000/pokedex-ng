import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgVarDirective } from '../../../../../shared/directives/ng-var.directive';
import { StubExpandableResourcesPipe, StubPokeTypeColorPipe } from '../../../../../shared/pipes/stubs';
import { stubMoveServiceProvider } from '../../../../../shared/services/stubs';
import { PokemonMoveComponent } from '../pokemon-move/pokemon-move.component';
import { PokemonMovesCardComponent } from './pokemon-moves-card.component';

@Component({ selector: 'app-pokemon-move', template: '' })
export class StubPokemonMoveComponent implements Partial<PokemonMoveComponent> {
  @Input() moveId: string | number;
}

describe('PokemonMovesCardComponent', () => {
  let component: PokemonMovesCardComponent;
  let fixture: ComponentFixture<PokemonMovesCardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [
          PokemonMovesCardComponent,
          StubPokemonMoveComponent,
          StubExpandableResourcesPipe,
          StubPokeTypeColorPipe,
          NgVarDirective,
        ],
        providers: [stubMoveServiceProvider],
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
