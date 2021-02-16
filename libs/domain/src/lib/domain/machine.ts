import { NamedApiResource } from './domain';
import { GameVersion } from './version-group';

export interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: NamedApiResource<GameVersion>;
}
