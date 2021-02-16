import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonHomeComponent,
  },
  {
    path: ':pokemon',
    component: PokemonDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
