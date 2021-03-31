import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineListComponent } from './machine-list/machine-list.component';

const routes: Routes = [{ path: '', component: MachineListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineRoutingModule {}
