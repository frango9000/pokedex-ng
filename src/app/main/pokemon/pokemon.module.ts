import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonHomeComponent} from './pokemon-home/pokemon-home.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {PokemonGridComponent} from './pokemon-home/pokemon-grid/pokemon-grid.component';
import {PokemonTableComponent} from './pokemon-home/pokemon-table/pokemon-table.component';
import {SharedModule} from '../../shared/shared.module';


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
    SharedModule
  ]
})
export class PokemonModule {
}
