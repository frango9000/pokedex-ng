import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Item } from '@pokedex-ng/domain';
import { forkJoin, of, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ItemAttributeService } from '../../../shared/services/item/item-attribute.service';
import { ItemService } from '../../../shared/services/item/item.service';

@Component({
  selector: 'pokedex-ng-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  @Input() itemId: string | number;

  public item: Item;

  private subscriptions = new Subscription();

  constructor(private itemService: ItemService, private itemAttributeService: ItemAttributeService) {}

  ngOnInit(): void {
    this.subscriptions.add(this._subscribeToFetchTranslations());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private _subscribeToFetchTranslations() {
    return this.itemService
      .fetchApiOne(this.itemId)
      .pipe(
        switchMap((item: Item) =>
          forkJoin([
            ...item.attributes.map((attribute) => this.itemAttributeService.fetchApiOne(attribute.name)),
            of({}),
          ]).pipe(map(() => item))
        )
      )
      .subscribe((item) => (this.item = item));
  }
}
