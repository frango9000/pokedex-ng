import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MoveListComponent } from './move-list/move-list.component';

import { MoveRoutingModule } from './move-routing.module';

@NgModule({
  declarations: [MoveListComponent],
  imports: [CommonModule, MoveRoutingModule, SharedModule],
})
export class MoveModule {}
