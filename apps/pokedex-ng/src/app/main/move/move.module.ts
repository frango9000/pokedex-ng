import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MoveDetailComponent } from './move-detail/move-detail.component';
import { MoveListComponent } from './move-list/move-list.component';

import { MoveRoutingModule } from './move-routing.module';

@NgModule({
  declarations: [MoveListComponent, MoveDetailComponent],
  imports: [CommonModule, MoveRoutingModule, SharedModule],
  exports: [MoveDetailComponent],
})
export class MoveModule {}
