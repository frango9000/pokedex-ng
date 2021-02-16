import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ExpandableResourcesStubPipe } from '../../../shared/pipes/expandable-resources.pipe.spec';
import { PokeTypeColorStubPipe } from '../../../shared/pipes/poke-type-color.pipe.spec';
import { pokemonStubServiceProvider } from '../../../shared/services/pokemon.service.stub';
import { PokemonAbilitiesStubComponent } from './pokemon-abilities/pokemon-abilities.component.spec';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonMovesStubComponent } from './pokemon-moves/pokemon-moves.component.spec';
import { PokemonSpeciesStubComponent } from './pokemon-species/pokemon-species.component.spec';
import { PokemonStatsStubComponent } from './pokemon-stats/pokemon-stats.component.spec';
import { PokemonTypeDamagesStubComponent } from './pokemon-type-damages/pokemon-type-damages.component.spec';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), RouterTestingModule, MDBBootstrapModule.forRoot()],
        declarations: [
          PokemonDetailComponent,
          PokeTypeColorStubPipe,
          PokemonSpeciesStubComponent,
          PokemonStatsStubComponent,
          PokemonTypeDamagesStubComponent,
          PokemonAbilitiesStubComponent,
          PokemonMovesStubComponent,
          ExpandableResourcesStubPipe,
        ],
        providers: [pokemonStubServiceProvider],
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
