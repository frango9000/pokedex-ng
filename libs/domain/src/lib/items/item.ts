import {
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
  attributes: NamedApiResource;
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

export interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: NamedApiResource<GameVersion>;
}

export interface ItemHolderPokemon {
  pokemon: NamedApiResource<Pokemon>;
  version_details: ItemHolderPokemonVersionDetail;
}
