import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NamedApiResource, PokemonAbilities, PokemonMoves, PokemonStats } from '@pokedex-ng/domain';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StubExpandableResourcesPipe, StubPokeTypeColorPipe } from '../../../shared/pipes/stubs';
import { stubPokemonServiceProvider } from '../../../shared/services/pokemon.service.stub';
import { PokemonAbilitiesComponent } from './pokemon-abilities/pokemon-abilities.component';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonMovesComponent } from './pokemon-moves/pokemon-moves.component';
import { PokemonSpeciesComponent } from './pokemon-species/pokemon-species.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonTypeDamagesComponent } from './pokemon-type-damages/pokemon-type-damages.component';

@Component({ selector: 'app-pokemon-species', template: '' })
export class PokemonSpeciesStubComponent implements Partial<PokemonSpeciesComponent> {
  @Input() pokemonSpeciesId: string | number;
}

@Component({ selector: 'app-pokemon-type-damages', template: '' })
export class PokemonTypeDamagesStubComponent implements Partial<PokemonTypeDamagesComponent> {
  @Input() typeIds: { slot: number; type: NamedApiResource }[];
}

@Component({ selector: 'app-pokemon-stats', template: '' })
export class PokemonStatsStubComponent implements Partial<PokemonStatsComponent> {
  @Input() pokemonStats: PokemonStats[];
}

@Component({ selector: 'app-pokemon-moves', template: '' })
export class PokemonMovesStubComponent implements Partial<PokemonMovesComponent> {
  @Input() pokemonMoves: PokemonMoves[];
}

@Component({ selector: 'app-pokemon-abilities', template: '' })
export class PokemonAbilitiesStubComponent implements Partial<PokemonAbilitiesComponent> {
  @Input() pokemonAbilities: PokemonAbilities[] = [];
}

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), RouterTestingModule, MDBBootstrapModule.forRoot()],
        declarations: [
          StubPokeTypeColorPipe,
          StubExpandableResourcesPipe,
          PokemonDetailComponent,
          PokemonSpeciesStubComponent,
          PokemonStatsStubComponent,
          PokemonTypeDamagesStubComponent,
          PokemonAbilitiesStubComponent,
          PokemonMovesStubComponent,
        ],
        providers: [stubPokemonServiceProvider],
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
