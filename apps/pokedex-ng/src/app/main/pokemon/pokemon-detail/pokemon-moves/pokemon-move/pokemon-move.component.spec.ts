import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgVarDirective } from '../../../../../shared/directives/ng-var.directive';
import { PokeTypeColorStubPipe } from '../../../../../shared/pipes/poke-type-color.pipe.spec';
import { ReplaceStubPipe } from '../../../../../shared/pipes/replace.pipe.spec';
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
        declarations: [PokemonMoveComponent, PokeTypeColorStubPipe, ReplaceStubPipe, NgVarDirective],
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

@Component({ selector: 'app-pokemon-move', template: '' })
export class PokemonMoveStubComponent implements Partial<PokemonMoveComponent> {
  @Input() moveId: string | number;
}
