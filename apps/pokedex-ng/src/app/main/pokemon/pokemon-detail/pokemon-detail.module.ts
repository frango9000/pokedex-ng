import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from '../../../shared/shared.module';
import { MoveDetailModule } from '../../move/move-detail/move-detail.module';
import { PokemonAbilitiesComponent } from './pokemon-abilities/pokemon-abilities.component';
import { PokemonAbilityComponent } from './pokemon-abilities/pokemon-ability/pokemon-ability.component';
import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonMovesCardComponent } from './pokemon-moves/pokemon-moves-card/pokemon-moves-card.component';
import { PokemonMovesComponent } from './pokemon-moves/pokemon-moves.component';
import {
  PokemonEvolutionChainComponent
} from './pokemon-species/pokemon-evolution-chain/pokemon-evolution-chain.component';
import {
  PokemonEvolutionLinkComponent
} from './pokemon-species/pokemon-evolution-chain/pokemon-evolution-link/pokemon-evolution-link.component';
import { PokemonSpeciesInfoComponent } from './pokemon-species/pokemon-species-info/pokemon-species-info.component';
import { PokemonSpeciesComponent } from './pokemon-species/pokemon-species.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonTypeDamagesComponent } from './pokemon-type-damages/pokemon-type-damages.component';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonAbilityComponent,
    PokemonMovesComponent,
    PokemonAbilitiesComponent,
    PokemonStatsComponent,
    PokemonMovesCardComponent,
    PokemonTypeDamagesComponent,
    PokemonSpeciesComponent,
    PokemonSpeciesInfoComponent,
    PokemonEvolutionChainComponent,
    PokemonEvolutionLinkComponent,
    PokemonInfoComponent,
  ],
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
    TranslocoModule,
    MoveDetailModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
  ],
})
export class PokemonDetailModule {}
