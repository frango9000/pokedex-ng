import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '../../../shared/shared.module';
import { TypeDamagesComponent } from './type-damages/type-damages.component';
import { TypePillComponent } from './type-pill/type-pill.component';
import { TypesPillComponent } from './types-pill/types-pill.component';

@NgModule({
  declarations: [TypePillComponent, TypeDamagesComponent, TypesPillComponent],
  imports: [CommonModule, TranslocoModule, SharedModule],
  exports: [TypePillComponent, TypeDamagesComponent, TypesPillComponent],
})
export class TypeDetailModule {}
