import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonHomeComponent} from './pokemon-home/pokemon-home.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {PokemonGridComponent} from './pokemon-home/pokemon-grid/pokemon-grid.component';
import {PokemonTableComponent} from './pokemon-home/pokemon-table/pokemon-table.component';
import {SharedModule} from '../../shared/shared.module';
import {ResourceIdPipe} from '../../shared/pipes/resource-id.pipe';
import {PokemonAbilityComponent} from './pokemon-detail/pokemon-abilities/pokemon-ability/pokemon-ability.component';
import {PokemonMoveComponent} from './pokemon-detail/pokemon-moves/pokemon-move/pokemon-move.component';
import {PokemonMovesComponent} from './pokemon-detail/pokemon-moves/pokemon-moves.component';
import {PokemonAbilitiesComponent} from './pokemon-detail/pokemon-abilities/pokemon-abilities.component';
import {PokemonStatsComponent} from './pokemon-detail/pokemon-stats/pokemon-stats.component';
import {PokemonMovesCardComponent} from './pokemon-detail/pokemon-moves/pokemon-moves-card/pokemon-moves-card.component';
import {PokemonTypeDamagesComponent} from './pokemon-detail/pokemon-type-damages/pokemon-type-damages.component';
import {PokemonSpeciesComponent} from './pokemon-detail/pokemon-species/pokemon-species.component';


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
    PokemonSpeciesComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    InfiniteScrollModule
  ],
  providers: [
    ResourceIdPipe
  ]
})
export class PokemonModule {
}
