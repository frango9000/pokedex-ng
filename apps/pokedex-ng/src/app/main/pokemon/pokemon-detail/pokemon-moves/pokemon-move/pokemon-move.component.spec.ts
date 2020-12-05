import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { NgVarDirective } from '../../../../../shared/directives/ng-var.directive';
import { PokeTypeColorPipeStub } from '../../../../../shared/pipes/poke-type-color.pipe.spec';
import { ReplacePipeStub } from '../../../../../shared/pipes/replace.pipe.spec';
import { pokemonLanguageServiceStubProvider } from '../../../../../shared/services/pokemon-language.service.spec';
import { pokemonMoveServiceStubProvider } from '../../../../../shared/services/pokemon-move.service.spec';
import { pokemonVersionServiceStubProvider } from '../../../../../shared/services/pokemon-version.service.spec';
import { PokemonMoveComponent } from './pokemon-move.component';

describe('PokemonMovesComponent', () => {
  let component: PokemonMoveComponent;
  let fixture: ComponentFixture<PokemonMoveComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [PokemonMoveComponent, PokeTypeColorPipeStub, ReplacePipeStub, NgVarDirective],
        providers: [
          pokemonMoveServiceStubProvider,
          pokemonVersionServiceStubProvider,
          pokemonLanguageServiceStubProvider,
        ],
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
export class PokemonMoveComponentStub implements Partial<PokemonMoveComponent> {
  @Input() moveId: string | number;
}
