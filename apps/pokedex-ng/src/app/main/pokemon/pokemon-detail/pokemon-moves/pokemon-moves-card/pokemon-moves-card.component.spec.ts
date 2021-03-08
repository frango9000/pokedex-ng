import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { NgVarDirective } from '../../../../../shared/directives/ng-var.directive';
import { StubExpandableResourcesPipe, StubPokeTypeColorPipe } from '../../../../../shared/pipes/stubs';
import { StubMoveDetailComponent } from '../../../../move/move-detail/move-detail.component.stub';
import { PokemonMovesCardComponent } from './pokemon-moves-card.component';

describe('PokemonMovesCardComponent', () => {
  let component: PokemonMovesCardComponent;
  let fixture: ComponentFixture<PokemonMovesCardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [
          PokemonMovesCardComponent,
          StubMoveDetailComponent,
          StubExpandableResourcesPipe,
          StubPokeTypeColorPipe,
          NgVarDirective,
        ],
        providers: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMovesCardComponent);
    component = fixture.componentInstance;
    component.moves$ = of(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
