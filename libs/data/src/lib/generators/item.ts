import { Item, PxItem } from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';

export class ItemGenerator extends AbstractGenerator<Item, PxItem> {
  getResourceName(): string {
    return 'item';
  }

  mapResource(resource: Item): PxItem {
    return {
      name: resource.name,
      id: resource.id,
      category: resource.category.name,
      cost: resource.cost,
      names: this.filterAndMapNames(resource.names),
      sprite: resource.sprites.default,
    };
  }
}
