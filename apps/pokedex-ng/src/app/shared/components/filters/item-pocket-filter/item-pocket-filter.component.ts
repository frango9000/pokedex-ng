import { Component, OnDestroy, OnInit } from '@angular/core';
import { PxItemPocket, SelectableResource } from '@pokedex-ng/domain';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../services/app/filter.service';
import { ItemPocketService } from '../../../services/item/item-pocket.service';
import { take } from 'rxjs/operators';
import { MdbCheckboxChange } from 'angular-bootstrap-md';

@Component({
  selector: 'pokedex-ng-item-pocket-filter',
  templateUrl: './item-pocket-filter.component.html',
  styleUrls: ['./item-pocket-filter.component.scss'],
})
export class ItemPocketFilterComponent implements OnInit, OnDestroy {
  public selectableItemPockets: SelectableResource<PxItemPocket>[] = [];

  private subscriptions = new Subscription();

  constructor(public filterService: FilterService, private itemPocketService: ItemPocketService) {}

  ngOnInit(): void {
    this.subscriptions.add(this._subscribeToGetAllItemPockets());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onFilterChange($event: MdbCheckboxChange, itemPocket: SelectableResource<PxItemPocket>) {
    itemPocket.active = $event.checked;
    this.filterService.setItemPocketFilter(
      this.selectableItemPockets
        .filter((selectableItemPocket) => selectableItemPocket.active)
        .map((selectableItemPocket) => selectableItemPocket.resource.name)
    );
  }

  private _subscribeToGetAllItemPockets() {
    return this.itemPocketService
      .getAll()
      .pipe(take(1))
      .subscribe((itemPockets) => {
        this.selectableItemPockets = itemPockets.map((itemPocket) => ({ active: false, resource: itemPocket }));
        this.subscriptions.add(this._subscribeToGetItemPocketFilter());
      });
  }

  private _subscribeToGetItemPocketFilter() {
    return this.filterService.getItemPocketFilter$().subscribe((itemPockets) => {
      this.selectableItemPockets.forEach((selectableItemPocket) => {
        selectableItemPocket.active = itemPockets.includes(selectableItemPocket.resource.name);
      });
    });
  }
}
