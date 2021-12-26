import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '../../../shared/shared.module';
import { MoveDetailComponent } from './move-detail.component';

@NgModule({
  declarations: [MoveDetailComponent],
  imports: [CommonModule, TranslocoModule, SharedModule],
  exports: [MoveDetailComponent],
})
export class MoveDetailModule {}
