import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemResolver } from '../../shared/resolvers/item.resolver';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path: '',
    component: ItemListComponent,
  },
  {
    path: ':item',
    component: ItemListComponent,
    resolve: {
      item: ItemResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemRoutingModule {}
