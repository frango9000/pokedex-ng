import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MoveDetailComponent } from './move-detail/move-detail.component';
import { MoveListComponent } from './move-list/move-list.component';
import { MoveRoutingModule } from './move-routing.module';
import { TypeService } from '../../shared/services/pokemon/type.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MoveService } from '../../shared/services/move/move.service';

@NgModule({
  declarations: [MoveListComponent, MoveDetailComponent],
  imports: [CommonModule, MoveRoutingModule, SharedModule, InfiniteScrollModule],
  exports: [MoveDetailComponent],
})
export class MoveModule {
  constructor(private moveService: MoveService, private typeService: TypeService) {}
}
