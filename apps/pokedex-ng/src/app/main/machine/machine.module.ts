import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ItemService } from '../../shared/services/item/item.service';
import { MachineService } from '../../shared/services/machine/machine.service';
import { MoveService } from '../../shared/services/move/move.service';
import { TypeService } from '../../shared/services/pokemon/type.service';
import { SharedModule } from '../../shared/shared.module';
import { ItemDetailModule } from '../item/item-detail/item-detail.module';
import { MoveDetailModule } from '../move/move-detail/move-detail.module';
import { MachineDetailComponent } from './machine-detail/machine-detail.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { MachineRoutingModule } from './machine-routing.module';

@NgModule({
  declarations: [MachineListComponent, MachineDetailComponent],
  imports: [
    CommonModule,
    MachineRoutingModule,
    InfiniteScrollModule,
    SharedModule,
    MDBBootstrapModule,
    MoveDetailModule,
    ItemDetailModule,
    TranslocoModule,
  ],
})
export class MachineModule {
  constructor(
    private itemService: ItemService,
    private machineService: MachineService,
    private moveService: MoveService,
    private typeService: TypeService
  ) {}
}
