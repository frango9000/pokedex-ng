import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MoveDamageClassService } from '../../../shared/services/move/move-damage-class.service';
import { SharedModule } from '../../../shared/shared.module';
import { TypeDetailModule } from '../../type/type-detail/type-detail.module';
import { MoveDetailComponent } from './move-detail.component';

@NgModule({
  declarations: [MoveDetailComponent],
  imports: [CommonModule, TranslocoModule, SharedModule, TypeDetailModule],
  exports: [MoveDetailComponent],
})
export class MoveDetailModule {
  constructor(private readonly moveDamageClassService: MoveDamageClassService) {}
}
