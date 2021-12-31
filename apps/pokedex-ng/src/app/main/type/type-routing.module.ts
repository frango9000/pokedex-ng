import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeChartComponent } from './type-chart/type-chart.component';

const routes: Routes = [
  {
    path: '',
    component: TypeChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeRoutingModule {}
