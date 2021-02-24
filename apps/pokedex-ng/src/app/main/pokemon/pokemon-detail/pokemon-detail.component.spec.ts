import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NamedApiResource, Pokemon, PokemonStats } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { stubPokemonServiceProvider } from '../../../shared/services/stubs';
import { PokemonAbilitiesComponent } from './pokemon-abilities/pokemon-abilities.component';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonMovesComponent } from './pokemon-moves/pokemon-moves.component';
import { PokemonSpeciesComponent } from './pokemon-species/pokemon-species.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonTypeDamagesComponent } from './pokemon-type-damages/pokemon-type-damages.component';

@Component({ selector: 'pokedex-ng-pokemon-info', template: '' })
export class StubPokemonInfoComponent implements Partial<PokemonInfoComponent> {
  @Input() public pokemon$: Observable<Pokemon>;
}

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
  @Input() pokemon$: Observable<Pokemon>;
}

@Component({ selector: 'app-pokemon-abilities', template: '' })
export class PokemonAbilitiesStubComponent implements Partial<PokemonAbilitiesComponent> {
  @Input() pokemon$: Observable<Pokemon>;
}

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), RouterTestingModule],
        declarations: [
          PokemonDetailComponent,
          StubPokemonInfoComponent,
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
