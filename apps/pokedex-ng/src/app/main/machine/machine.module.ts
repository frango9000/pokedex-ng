import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineRoutingModule } from './machine-routing.module';
import { MachineListComponent } from './machine-list/machine-list.component';
import { MachineDetailComponent } from './machine-detail/machine-detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../../shared/shared.module';
import { ItemService } from '../../shared/services/item/item.service';
import { MoveService } from '../../shared/services/move/move.service';
import { MachineService } from '../../shared/services/machine/machine.service';
import { TypeService } from '../../shared/services/pokemon/type.service';

@NgModule({
  declarations: [MachineListComponent, MachineDetailComponent],
  imports: [CommonModule, MachineRoutingModule, InfiniteScrollModule, SharedModule],
})
export class MachineModule {
  constructor(
    private itemService: ItemService,
    private machineService: MachineService,
    private moveService: MoveService,
    private typeService: TypeService
  ) {}
}
