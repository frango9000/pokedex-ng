import {
  ApiDescription,
  ApiEffectEntry,
  ApiEntity,
  ApiFlavorTextEntry,
  ApiName,
  EvolutionChain,
  GameVersion,
  GenerationGameIndex,
  LocalizedName,
  MachineVersionDetail,
  NamedApiResource,
  Pokemon,
} from '@pokedex-ng/domain';

export interface PxItem extends ApiEntity {
  cost: number;
  names: LocalizedName[];
  category: string;
  sprite: string;
}

export interface Item extends ApiEntity {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: NamedApiResource;
  attributes: NamedApiResource<ItemAttribute>[];
  category: NamedApiResource<ItemCategory>;
  effect_entries: ApiEffectEntry[];
  flavor_text_entries: ApiFlavorTextEntry[];
  game_indices: GenerationGameIndex[];
  names: ApiName[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: NamedApiResource<EvolutionChain>;
  machines: MachineVersionDetail[];
}

export interface ItemCategory extends ApiEntity {
  items: NamedApiResource<Item>[];
  names: ApiName[];
  pocket: NamedApiResource;
}

export interface ItemSprites {
  default: string;
}

export interface ItemHolderPokemon {
  pokemon: NamedApiResource<Pokemon>;
  version_details: ItemHolderPokemonVersionDetail;
}

export interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: NamedApiResource<GameVersion>;
}

export interface ItemAttribute extends ApiEntity {
  id: number;
  name: string;
  names: ApiName[];
  descriptions: ApiDescription[];
  items: NamedApiResource<Item>[];
}

export interface ItemPocket extends ApiEntity {
  id: number;
  name: string;
  categories: NamedApiResource<ItemCategory>[];
  names: ApiName[];
}

export interface ItemCategory extends ApiEntity {
  id: number;
  name: string;
  names: ApiName[];
  items: NamedApiResource<Item>[];
  pocket: NamedApiResource<ItemPocket>;
}

export interface ItemFlingEffect extends ApiEntity {
  id: number;
  name: string;
  items: NamedApiResource<Item>[];
  effect_entries: ApiEffectEntry[];
}
