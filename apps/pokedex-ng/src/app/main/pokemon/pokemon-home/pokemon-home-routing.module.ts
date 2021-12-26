import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonHomeComponent } from './pokemon-home.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonHomeRoutingModule {}
