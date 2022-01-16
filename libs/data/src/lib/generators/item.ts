import {
  ApiEntity,
  Item,
  ItemCategory,
  ItemPocket,
  NamedApiResource,
  PxItem,
  PxItemCategory,
  PxItemPocket,
} from '@pokedex-ng/domain';
import { Axios } from 'axios-observable';
import { Observable } from 'rxjs';
import { map, mergeMap, retry } from 'rxjs/operators';
import { AbstractGenerator } from '../model/abstract-generator';

export class ItemGenerator extends AbstractGenerator<ItemWithCategory, PxItem> {
  constructor() {
    super('item');
  }

  mapResource(resource: ItemWithCategory): PxItem {
    return {
      id: resource.item.id,
      name: resource.item.name,
      category: resource.item.category.name,
      cost: resource.item.cost,
      names: this.filterAndMapNames(resource.item.names),
      sprite: resource.item.sprites.default?.substring(71),
      pocket: resource.category.pocket.name,
    };
  }

  protected _fetchOne(namedApiResource: NamedApiResource<Item>): Observable<ItemWithCategory> {
    return super._fetchOne(namedApiResource).pipe(
      map((item) => item as any as Item),
      mergeMap((item: Item) =>
        Axios.get<ItemCategory>(item.category.url).pipe(
          retry(10),
          map((value) => value.data),
          map((category) => ({ item, category }))
        )
      )
    );
  }
}

interface ItemWithCategory extends ApiEntity {
  item: Item;
  category: ItemCategory;
}

export class ItemCategoryGenerator extends AbstractGenerator<ItemCategory, PxItemCategory> {
  constructor() {
    super('item-category');
  }

  protected mapResource(resource: ItemCategory): PxItemCategory {
    return {
      id: resource.id,
      name: resource.name,
      names: this.filterAndMapNames(resource.names),
      pocket: resource.pocket.name,
    };
  }
}

export class ItemPocketGenerator extends AbstractGenerator<ItemPocket, PxItemPocket> {
  constructor() {
    super('item-pocket');
  }

  protected mapResource(resource: ItemPocket): PxItemPocket {
    return {
      id: resource.id,
      name: resource.name,
      names: this.filterAndMapNames(resource.names),
    };
  }
}
