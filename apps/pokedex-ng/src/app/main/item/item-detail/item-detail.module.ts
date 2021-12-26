import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from '../../../shared/shared.module';
import { ItemDetailComponent } from './item-detail.component';

@NgModule({
  declarations: [ItemDetailComponent],
  imports: [CommonModule, TranslocoModule, SharedModule, MDBBootstrapModule.forRoot()],
  exports: [ItemDetailComponent],
})
export class ItemDetailModule {}
