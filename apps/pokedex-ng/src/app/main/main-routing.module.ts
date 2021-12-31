import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const loadPokemonModule = () => import('./pokemon/pokemon.module').then((m) => m.PokemonModule);
export const loadMoveModule = () => import('./move/move.module').then((m) => m.MoveModule);
export const loadItemModule = () => import('./item/item.module').then((m) => m.ItemModule);
export const loadMachineModule = () => import('./machine/machine.module').then((m) => m.MachineModule);
export const loadTypeModule = () => import('./type/type.module').then((m) => m.TypeModule);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
  {
    path: 'pokemon',
    loadChildren: loadPokemonModule,
  },
  {
    path: 'move',
    loadChildren: loadMoveModule,
  },
  {
    path: 'item',
    loadChildren: loadItemModule,
  },
  {
    path: 'machine',
    loadChildren: loadMachineModule,
  },
  {
    path: 'type',
    loadChildren: loadTypeModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
