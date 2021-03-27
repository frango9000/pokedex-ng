import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemResolver } from '../../shared/resolvers/item.resolver';

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
