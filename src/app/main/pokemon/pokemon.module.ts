import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonHomeComponent} from './pokemon-home/pokemon-home.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [PokemonHomeComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule {
}
