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


@NgModule({
  declarations: [
    PokemonHomeComponent,
    PokemonDetailComponent,
    PokemonGridComponent,
    PokemonTableComponent
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
