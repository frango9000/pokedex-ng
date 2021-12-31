import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TypeChartComponent } from './type-chart/type-chart.component';
import { TypeDetailModule } from './type-detail/type-detail.module';

import { TypeRoutingModule } from './type-routing.module';

@NgModule({
  declarations: [TypeChartComponent],
  imports: [CommonModule, TypeRoutingModule, TypeDetailModule, MDBBootstrapModule.forRoot(), TranslocoModule],
})
export class TypeModule {}
