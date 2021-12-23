import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MoveService } from '../../shared/services/move/move.service';
import { TypeService } from '../../shared/services/pokemon/type.service';
import { SharedModule } from '../../shared/shared.module';
import { MoveDetailComponent } from './move-detail/move-detail.component';
import { MoveListComponent } from './move-list/move-list.component';
import { MoveRoutingModule } from './move-routing.module';

@NgModule({
  declarations: [MoveListComponent, MoveDetailComponent],
  imports: [CommonModule, MoveRoutingModule, SharedModule, InfiniteScrollModule, TranslocoModule],
  exports: [MoveDetailComponent],
})
export class MoveModule {
  constructor(private moveService: MoveService, private typeService: TypeService) {}
}
