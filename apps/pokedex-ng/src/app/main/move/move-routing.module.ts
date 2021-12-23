import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveResolver } from '../../shared/resolvers/move.resolver';
import { MoveListComponent } from './move-list/move-list.component';

const routes: Routes = [
  {
    path: '',
    component: MoveListComponent,
  },
  {
    path: ':move',
    component: MoveListComponent,
    resolve: { move: MoveResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoveRoutingModule {}
