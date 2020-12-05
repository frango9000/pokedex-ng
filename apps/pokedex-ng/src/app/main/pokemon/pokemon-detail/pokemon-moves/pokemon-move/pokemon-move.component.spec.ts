import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { NgVarDirective } from '../../../../../shared/directives/ng-var.directive';
import { PokeTypeColorPipe } from '../../../../../shared/pipes/poke-type-color.pipe';
import { ReplacePipe } from '../../../../../shared/pipes/replace.pipe';
import { PokemonLanguageService } from '../../../../../shared/services/pokemon-language.service';
import { PokemonMoveService } from '../../../../../shared/services/pokemon-move.service';
import { PokemonVersionService } from '../../../../../shared/services/pokemon-version.service';
import { PokemonMoveComponent } from './pokemon-move.component';

const pokemonMoveService = {
  getApiMove: () => of(null),
};
const pokemonVersionService = {
  activeVersion$: of({}),
  getVersionList: () => of({}),
};
const pokemonLanguageService = {
  getLanguageList: of([]),
};

describe('PokemonMovesComponent', () => {
  let component: PokemonMoveComponent;
  let fixture: ComponentFixture<PokemonMoveComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [PokemonMoveComponent, PokeTypeColorPipe, ReplacePipe, NgVarDirective],
        providers: [
          { provide: PokemonMoveService, useValue: pokemonMoveService },
          { provide: PokemonVersionService, useValue: pokemonVersionService },
          { provide: PokemonLanguageService, useValue: pokemonLanguageService },
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
