import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveListComponent } from './move-list/move-list.component';

const routes: Routes = [
  {
    path: '',
    component: MoveListComponent,
  },
  {
    path: ':move',
    component: MoveListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoveRoutingModule {}
