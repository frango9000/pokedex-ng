import {
  ApiEffectEntry,
  ApiFlavorTextEntry,
  ApiName,
  ApiResource,
  EvolutionChain,
  GameVersion,
  GenerationGameIndex,
  LocalizedName,
  NamedApiResource,
  NamedApiVersionGroup,
  Pokemon,
} from '@pokedex-ng/domain';

export interface NamedApiItem extends NamedApiResource<Item> {
  cost: number;
  names: LocalizedName[];
  category: string;
  sprite: string;
}

export interface Item extends ApiResource {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: NamedApiResource;
  attributes: NamedApiResource;
  category: ItemCategory;
  effect_entries: ApiEffectEntry[];
  flavor_text_entries: ApiFlavorTextEntry[];
  game_indices: GenerationGameIndex[];
  names: ApiName[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: NamedApiResource<EvolutionChain>;
  machines: MachineVersionDetail[];
}

export interface ItemCategory extends ApiResource {
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

export interface MachineVersionDetail {
  machine: NamedApiResource;
  version_group: NamedApiVersionGroup;
}
