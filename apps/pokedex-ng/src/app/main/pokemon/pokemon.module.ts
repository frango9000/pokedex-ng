import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ResourceIdPipe } from '../../shared/pipes/resource-id.pipe';
import { SharedModule } from '../../shared/shared.module';
import { PokemonAbilitiesComponent } from './pokemon-detail/pokemon-abilities/pokemon-abilities.component';
import { PokemonAbilityComponent } from './pokemon-detail/pokemon-abilities/pokemon-ability/pokemon-ability.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonMoveComponent } from './pokemon-detail/pokemon-moves/pokemon-move/pokemon-move.component';
import { PokemonMovesCardComponent } from './pokemon-detail/pokemon-moves/pokemon-moves-card/pokemon-moves-card.component';
import { PokemonMovesComponent } from './pokemon-detail/pokemon-moves/pokemon-moves.component';
import { PokemonEvolutionChainComponent } from './pokemon-detail/pokemon-species/pokemon-evolution-chain/pokemon-evolution-chain.component';
// eslint-disable-next-line max-len
import { PokemonEvolutionLinkComponent } from './pokemon-detail/pokemon-species/pokemon-evolution-chain/pokemon-evolution-link/pokemon-evolution-link.component';
import { PokemonSpeciesInfoComponent } from './pokemon-detail/pokemon-species/pokemon-species-info/pokemon-species-info.component';
import { PokemonSpeciesComponent } from './pokemon-detail/pokemon-species/pokemon-species.component';
import { PokemonStatsComponent } from './pokemon-detail/pokemon-stats/pokemon-stats.component';
import { PokemonTypeDamagesComponent } from './pokemon-detail/pokemon-type-damages/pokemon-type-damages.component';
import { PokemonGridComponent } from './pokemon-home/pokemon-grid/pokemon-grid.component';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonTableComponent } from './pokemon-home/pokemon-table/pokemon-table.component';

import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [
    PokemonHomeComponent,
    PokemonDetailComponent,
    PokemonGridComponent,
    PokemonTableComponent,
    PokemonAbilityComponent,
    PokemonMoveComponent,
    PokemonMovesComponent,
    PokemonAbilitiesComponent,
    PokemonStatsComponent,
    PokemonMovesCardComponent,
    PokemonTypeDamagesComponent,
    PokemonSpeciesComponent,
    PokemonSpeciesInfoComponent,
    PokemonEvolutionChainComponent,
    PokemonEvolutionLinkComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule, MDBBootstrapModule.forRoot(), SharedModule, InfiniteScrollModule],
  providers: [ResourceIdPipe],
})
export class PokemonModule {}
