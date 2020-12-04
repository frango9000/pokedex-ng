import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { PokemonLanguageService } from '../../../../../shared/services/pokemon-language.service';
import { PokemonMoveService } from '../../../../../shared/services/pokemon-move.service';
import { PokemonVersionService } from '../../../../../shared/services/pokemon-version.service';

import { PokemonAbilityComponent } from './pokemon-ability.component';

describe('PokemonAbilityComponent', () => {
  let component: PokemonAbilityComponent;
  let fixture: ComponentFixture<PokemonAbilityComponent>;

  const pokemonMoveService = {
    getAbility: () => of(null),
  };
  const pokemonVersionService = {
    activeVersion$: of({}),
  };
  const pokemonLanguageService = {
    getLanguageList: of({}),
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [PokemonAbilityComponent],
        providers: [
          { provide: PokemonMoveService, useValue: pokemonMoveService },
          { provide: PokemonVersionService, useValue: pokemonVersionService },
          { provide: PokemonLanguageService, useValue: pokemonLanguageService },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
