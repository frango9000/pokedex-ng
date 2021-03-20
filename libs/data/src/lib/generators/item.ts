import { Item, PxItem } from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';

export class ItemGenerator extends AbstractGenerator<Item, PxItem> {
  constructor() {
    super('item');
  }

  mapResource(resource: Item): PxItem {
    return {
      id: resource.id,
      name: resource.name,
      category: resource.category.name,
      cost: resource.cost,
      names: this.filterAndMapNames(resource.names),
      sprite: resource.sprites.default,
    };
  }
}
