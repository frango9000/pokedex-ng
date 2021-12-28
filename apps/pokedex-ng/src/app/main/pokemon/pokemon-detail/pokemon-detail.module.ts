import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EncounterConditionValueService } from '../../../shared/services/encounters/encounter-condition-value.service';
import { EncounterConditionService } from '../../../shared/services/encounters/encounter-condition.service';
import { EncounterMethodService } from '../../../shared/services/encounters/encounter-method.service';
import { SharedModule } from '../../../shared/shared.module';
import { MoveDetailModule } from '../../move/move-detail/move-detail.module';
import { PokemonAbilitiesComponent } from './pokemon-abilities/pokemon-abilities.component';
import { PokemonAbilityComponent } from './pokemon-abilities/pokemon-ability/pokemon-ability.component';
import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonEncountersDetailsComponent } from './pokemon-encounters/pokemon-encounters-detail/pokemon-encounters-details.component';
import { PokemonEncountersLocationComponent } from './pokemon-encounters/pokemon-encounters-location/pokemon-encounters-location.component';
import { PokemonEncountersVersionComponent } from './pokemon-encounters/pokemon-encounters-version/pokemon-encounters-version.component';
import { PokemonEncountersComponent } from './pokemon-encounters/pokemon-encounters.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonMovesCardComponent } from './pokemon-moves/pokemon-moves-card/pokemon-moves-card.component';
import { PokemonMovesComponent } from './pokemon-moves/pokemon-moves.component';
import { PokemonEvolutionChainComponent } from './pokemon-species/pokemon-evolution-chain/pokemon-evolution-chain.component';
import { PokemonEvolutionLinkComponent } from './pokemon-species/pokemon-evolution-chain/pokemon-evolution-link/pokemon-evolution-link.component';
import { PokemonSpeciesInfoComponent } from './pokemon-species/pokemon-species-info/pokemon-species-info.component';
import { PokemonSpeciesComponent } from './pokemon-species/pokemon-species.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonTypeDamagesModule } from './pokemon-type-damages/pokemon-type-damages.module';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonAbilityComponent,
    PokemonMovesComponent,
    PokemonAbilitiesComponent,
    PokemonStatsComponent,
    PokemonMovesCardComponent,
    PokemonSpeciesComponent,
    PokemonSpeciesInfoComponent,
    PokemonEvolutionChainComponent,
    PokemonEvolutionLinkComponent,
    PokemonInfoComponent,
    PokemonEncountersComponent,
    PokemonEncountersVersionComponent,
    PokemonEncountersLocationComponent,
    PokemonEncountersDetailsComponent,
  ],
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
    PokemonTypeDamagesModule,
    TranslocoModule,
    MoveDetailModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
  ],
})
export class PokemonDetailModule {
  constructor(
    private readonly encounterMethodService: EncounterMethodService,
    private readonly encounterConditionService: EncounterConditionService,
    private readonly encounterConditionValueService: EncounterConditionValueService
  ) {}
}
