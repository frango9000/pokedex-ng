import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ExpandableResourcesPipeStub } from '../../../shared/pipes/expandable-resources.pipe.spec';
import { PokeTypeColorPipeStub } from '../../../shared/pipes/poke-type-color.pipe.spec';
import { pokemonServiceStubProvider } from '../../../shared/services/pokemon.service.spec';
import { PokemonAbilitiesComponentStub } from './pokemon-abilities/pokemon-abilities.component.spec';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonMovesComponentStub } from './pokemon-moves/pokemon-moves.component.spec';
import { PokemonSpeciesComponentStub } from './pokemon-species/pokemon-species.component.spec';
import { PokemonStatsComponentStub } from './pokemon-stats/pokemon-stats.component.spec';
import { PokemonTypeDamagesComponentStub } from './pokemon-type-damages/pokemon-type-damages.component.spec';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), RouterTestingModule, MDBBootstrapModule.forRoot()],
        declarations: [
          PokemonDetailComponent,
          PokeTypeColorPipeStub,
          PokemonSpeciesComponentStub,
          PokemonStatsComponentStub,
          PokemonTypeDamagesComponentStub,
          PokemonAbilitiesComponentStub,
          PokemonMovesComponentStub,
          ExpandableResourcesPipeStub,
        ],
        providers: [pokemonServiceStubProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
