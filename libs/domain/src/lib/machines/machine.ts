import { ApiEntity, Item, Move, NamedApiResource, VersionGroup } from '@pokedex-ng/domain';

export interface PokedexMachine extends ApiEntity {
  id: number;
  item: string;
  move: string;
  version_group: string;
}

export interface Machine extends ApiEntity {
  id: number;
  item: NamedApiResource<Item>;
  move: NamedApiResource<Move>;
  version_group: NamedApiResource<VersionGroup>;
}
