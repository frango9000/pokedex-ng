import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const loadPokemonModule = () => import('./pokemon/pokemon.module').then((m) => m.PokemonModule);

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'pokemon',
        pathMatch: 'full',
      },
      {
        path: 'pokemon',
        loadChildren: loadPokemonModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
