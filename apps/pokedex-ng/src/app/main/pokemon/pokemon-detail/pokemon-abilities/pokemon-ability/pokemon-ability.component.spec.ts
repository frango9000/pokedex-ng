import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { PokemonAbilityComponent } from './pokemon-ability.component';
import { pokemonMoveServiceStubProvider } from '../../../../../shared/services/pokemon-move.service.spec';
import { pokemonVersionServiceStubProvider } from '../../../../../shared/services/pokemon-version.service.spec';
import { pokemonLanguageServiceStubProvider } from '../../../../../shared/services/pokemon-language.service.spec';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

describe('PokemonAbilityComponent', () => {
  let component: PokemonAbilityComponent;
  let fixture: ComponentFixture<PokemonAbilityComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [PokemonAbilityComponent],
        providers: [
          pokemonMoveServiceStubProvider,
          pokemonVersionServiceStubProvider,
          pokemonLanguageServiceStubProvider,
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

@Component({ selector: 'app-pokemon-ability', template: '' })
export class PokemonAbilityComponentStub implements Partial<PokemonAbilityComponent> {
  @Input() abilityId: string | number;
}
