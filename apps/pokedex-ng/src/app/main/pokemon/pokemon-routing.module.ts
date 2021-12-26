import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonResolver } from '../../shared/resolvers/pokemon.resolver';

export const loadPokemonHomeModule = () =>
  import('./pokemon-home/pokemon-home.module').then((m) => m.PokemonHomeModule);
export const loadPokemonDetailModule = () =>
  import('./pokemon-detail/pokemon-detail.module').then((m) => m.PokemonDetailModule);

const routes: Routes = [
  {
    path: '',
    loadChildren: loadPokemonHomeModule,
  },
  {
    path: ':pokemon',
    loadChildren: loadPokemonDetailModule,
    resolve: { pokemon: PokemonResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
