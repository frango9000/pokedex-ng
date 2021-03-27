import { Component, OnDestroy, OnInit } from '@angular/core';
import { PxItemCategory, SelectableResource } from '@pokedex-ng/domain';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../services/app/filter.service';
import { ItemCategoryService } from '../../../services/item/item-category.service';
import { take } from 'rxjs/operators';
import { MdbCheckboxChange } from 'angular-bootstrap-md';

@Component({
  selector: 'pokedex-ng-item-category-filter',
  templateUrl: './item-category-filter.component.html',
  styleUrls: ['./item-category-filter.component.scss'],
})
export class ItemCategoryFilterComponent implements OnInit, OnDestroy {
  public selectableItemCategories: SelectableResource<PxItemCategory>[] = [];

  private subscriptions = new Subscription();

  constructor(public filterService: FilterService, private itemCategoryService: ItemCategoryService) {}

  ngOnInit(): void {
    this.subscriptions.add(this._subscribeToGetAllItemCategories());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onFilterChange($event: MdbCheckboxChange, itemCategory: SelectableResource<PxItemCategory>) {
    itemCategory.active = $event.checked;
    this.filterService.setItemCategoryFilter(
      this.selectableItemCategories
        .filter((selectableItemCategory) => selectableItemCategory.active)
        .map((selectableItemCategory) => selectableItemCategory.resource.name)
    );
  }

  private _subscribeToGetAllItemCategories() {
    return this.itemCategoryService
      .getAll()
      .pipe(take(1))
      .subscribe((itemCategories) => {
        this.selectableItemCategories = itemCategories.map((itemCategory) => ({
          active: false,
          resource: itemCategory,
        }));
        this.subscriptions.add(this._subscribeToGetItemCategoryFilter());
      });
  }

  private _subscribeToGetItemCategoryFilter() {
    return this.filterService.getItemCategoryFilter$().subscribe((itemCategories) => {
      this.selectableItemCategories.forEach((selectableItemCategory) => {
        selectableItemCategory.active = itemCategories.includes(selectableItemCategory.resource.name);
      });
    });
  }
}
