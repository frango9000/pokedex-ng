import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {PokemonModule} from './pokemon/pokemon.module';
import {TestComponent} from './test/test.component';

export const loadPokemonModule = () => PokemonModule;

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'pokemon',
        pathMatch: 'full'
      },
      {
        path: 'pokemon',
        loadChildren: loadPokemonModule
      }
    ]
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
