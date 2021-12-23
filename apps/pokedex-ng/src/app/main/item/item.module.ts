import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ItemCategoryService } from '../../shared/services/item/item-category.service';
import { ItemPocketService } from '../../shared/services/item/item-pocket.service';
import { ItemService } from '../../shared/services/item/item.service';
import { SharedModule } from '../../shared/shared.module';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  declarations: [ItemListComponent, ItemDetailComponent],
  imports: [CommonModule, ItemRoutingModule, InfiniteScrollModule, SharedModule, TranslocoModule],
  exports: [ItemDetailComponent],
})
export class ItemModule {
  constructor(
    private itemService: ItemService,
    private itemCategoryService: ItemCategoryService,
    private itemPocketService: ItemPocketService
  ) {}
}
