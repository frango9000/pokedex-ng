import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonResolver } from '../../shared/resolvers/pokemon.resolver';

const routes: Routes = [
  {
    path: '',
    component: PokemonHomeComponent,
  },
  {
    path: ':pokemon',
    component: PokemonDetailComponent,
    resolve: { pokemon: PokemonResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
