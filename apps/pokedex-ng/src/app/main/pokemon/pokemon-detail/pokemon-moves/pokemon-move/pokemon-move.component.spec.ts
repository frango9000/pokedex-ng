import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgVarDirective } from '../../../../../shared/directives/ng-var.directive';
import { StubPokeTypeColorPipe, StubReplacePipe, StubWithVersionGroupPipe } from '../../../../../shared/pipes/stubs';
import { stubGameVersionServiceProvider, stubMoveServiceProvider } from '../../../../../shared/services/stubs';
import { PokemonMoveComponent } from './pokemon-move.component';

describe('PokemonMovesComponent', () => {
  let component: PokemonMoveComponent;
  let fixture: ComponentFixture<PokemonMoveComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [
          PokemonMoveComponent,
          StubPokeTypeColorPipe,
          StubReplacePipe,
          NgVarDirective,
          StubWithVersionGroupPipe,
        ],
        providers: [stubMoveServiceProvider, stubGameVersionServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
