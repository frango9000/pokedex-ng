import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { pokemonLanguageStubServiceProvider } from '../../../../../shared/services/pokemon-language.service.spec';
import { pokemonMoveStubServiceProvider } from '../../../../../shared/services/pokemon-move.service.spec';
import { pokemonVersionStubServiceProvider } from '../../../../../shared/services/pokemon-version.service.spec';
import { PokemonAbilityComponent } from './pokemon-ability.component';

describe('PokemonAbilityComponent', () => {
  let component: PokemonAbilityComponent;
  let fixture: ComponentFixture<PokemonAbilityComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [PokemonAbilityComponent],
        providers: [
          pokemonMoveStubServiceProvider,
          pokemonVersionStubServiceProvider,
          pokemonLanguageStubServiceProvider,
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
export class PokemonAbilityStubComponent implements Partial<PokemonAbilityComponent> {
  @Input() abilityId: string | number;
}
