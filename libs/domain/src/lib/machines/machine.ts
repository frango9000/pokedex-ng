import { ApiEntity, Item, Move, NamedApiResource, VersionGroup } from '@pokedex-ng/domain';

export interface PxMachine extends ApiEntity {
  id: number;
  item: { id: number; name: string; cost: number; sprite: string };
  move: { id: number; name: string; accuracy?: number; power?: number; pp?: number; type: string };
  version_group: string;
}

export interface Machine extends ApiEntity {
  id: number;
  item: NamedApiResource<Item>;
  move: NamedApiResource<Move>;
  version_group: NamedApiResource<VersionGroup>;
}
