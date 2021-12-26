import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../../../shared/shared.module';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';

import { PokemonHomeRoutingModule } from './pokemon-home-routing.module';
import { PokemonHomeComponent } from './pokemon-home.component';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';

@NgModule({
  declarations: [PokemonHomeComponent, PokemonGridComponent, PokemonTableComponent],
  imports: [
    CommonModule,
    PokemonHomeRoutingModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    InfiniteScrollModule,
    TranslocoModule,
  ],
})
export class PokemonHomeModule {}
