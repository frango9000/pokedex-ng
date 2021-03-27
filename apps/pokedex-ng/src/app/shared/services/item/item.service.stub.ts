import { ItemService } from './item.service';
import { ItemPocketService } from './item-pocket.service';
import { ItemCategoryService } from './item-category.service';
import { StubBaseService } from '../stubs';
import { ItemAttributeService } from './item-attribute.service';

export class StubItemService extends StubBaseService<ItemService> implements Partial<ItemService> {}

export const stubItemServiceProvider = {
  provide: ItemService,
  useClass: StubItemService,
};

export class StubItemCategoryService
  extends StubBaseService<ItemCategoryService>
  implements Partial<ItemCategoryService> {}

export const stubItemCategoryServiceProvider = {
  provide: ItemCategoryService,
  useClass: StubItemCategoryService,
};

export class StubItemPocketService extends StubBaseService<ItemPocketService> implements Partial<ItemPocketService> {}

export const stubItemPocketServiceProvider = {
  provide: ItemPocketService,
  useClass: StubItemPocketService,
};

export class StubItemAttributeService
  extends StubBaseService<ItemAttributeService>
  implements Partial<ItemAttributeService> {}

export const stubItemAttributeServiceProvider = {
  provide: ItemAttributeService,
  useClass: StubItemAttributeService,
};
