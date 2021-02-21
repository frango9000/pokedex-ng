import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { gameVersionStubServiceProvider } from '../../../../../shared/services/game-version.service.stub';
import { stubPokemonLanguageServiceProvider } from '../../../../../shared/services/pokemon-language.service.stub';
import { pokemonMoveStubServiceProvider } from '../../../../../shared/services/pokemon-move.service.stub';
import { PokemonAbilityComponent } from './pokemon-ability.component';

describe('PokemonAbilityComponent', () => {
  let component: PokemonAbilityComponent;
  let fixture: ComponentFixture<PokemonAbilityComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [PokemonAbilityComponent],
        providers: [pokemonMoveStubServiceProvider, gameVersionStubServiceProvider, stubPokemonLanguageServiceProvider],
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
