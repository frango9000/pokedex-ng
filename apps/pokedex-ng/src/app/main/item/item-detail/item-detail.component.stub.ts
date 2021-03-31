import { Component, Input } from '@angular/core';
import { ItemDetailComponent } from './item-detail.component';

@Component({ selector: 'pokedex-ng-item-detail', template: '' })
export class StubItemDetailComponent implements Partial<ItemDetailComponent> {
  @Input() itemId: string | number;
}
