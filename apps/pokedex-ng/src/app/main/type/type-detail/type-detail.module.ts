import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '../../../shared/shared.module';
import { TypeDamagesComponent } from './type-damages/type-damages.component';
import { TypePillComponent } from './type-pill/type-pill.component';

@NgModule({
  declarations: [TypePillComponent, TypeDamagesComponent],
  imports: [CommonModule, TranslocoModule, SharedModule],
  exports: [TypePillComponent, TypeDamagesComponent],
})
export class TypeDetailModule {}
