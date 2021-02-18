import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgVarDirective } from '../../../../../shared/directives/ng-var.directive';
import { StubPokeTypeColorPipe, StubReplacePipe } from '../../../../../shared/pipes/stubs';
import { gameVersionStubServiceProvider } from '../../../../../shared/services/game-version.service.stub';
import { pokemonLanguageStubServiceProvider } from '../../../../../shared/services/pokemon-language.service.stub';
import { pokemonMoveStubServiceProvider } from '../../../../../shared/services/pokemon-move.service.stub';
import { PokemonMoveComponent } from './pokemon-move.component';

describe('PokemonMovesComponent', () => {
  let component: PokemonMoveComponent;
  let fixture: ComponentFixture<PokemonMoveComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [PokemonMoveComponent, StubPokeTypeColorPipe, StubReplacePipe, NgVarDirective],
        providers: [pokemonMoveStubServiceProvider, gameVersionStubServiceProvider, pokemonLanguageStubServiceProvider],
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
