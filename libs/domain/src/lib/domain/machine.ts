import { ApiResource, NamedApiResource } from './domain';
import { GameVersion, GameVersionGroup } from './game-version';
import { Item } from './item';
import { Move } from './move';

export interface Machine extends ApiResource {
  item: NamedApiResource<Item>;
  move: NamedApiResource<Move>;
  version_group: NamedApiResource<GameVersionGroup>;
}

export interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: NamedApiResource<GameVersion>;
}
