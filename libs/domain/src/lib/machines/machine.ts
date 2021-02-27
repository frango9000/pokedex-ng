import { ApiEntity, GameVersionGroup, Item, Move, NamedApiResource, PokedexResource } from '@pokedex-ng/domain';

export interface PokedexMachine extends PokedexResource {
  item: string;
  move: string;
  version_group: string;
}

export interface Machine extends ApiEntity {
  item: NamedApiResource<Item>;
  move: NamedApiResource<Move>;
  version_group: NamedApiResource<GameVersionGroup>;
}
