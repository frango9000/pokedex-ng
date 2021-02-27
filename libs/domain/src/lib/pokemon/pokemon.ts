import {
  Ability,
  ApiEntity,
  GameVersion,
  Item,
  Move,
  NamedApiResource,
  PokeType,
  PxGameVersionGroup,
  Species,
} from '@pokedex-ng/domain';

export interface PxPokemon extends ApiEntity {
  types?: string[];
  generation?: number;
}

export interface Pokemon extends ApiEntity {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;
  species: NamedApiResource<Species>;
  forms: NamedApiResource[];
  moves: PokemonMoves[];
  abilities: PokemonAbilities[];
  game_indices: PokemonGameIndices[];
  held_items: PokemonHeldItems[];
  location_area_encounters: PokemonLocationAreaEncounters[];
  sprites: PokemonSprites;
  stats: PokemonStats[];
  types: PokeSlotType[];
}

export interface PokeSlotType {
  slot: number;
  type: NamedApiResource<PokeType>;
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: NamedApiResource;
}

export interface PokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface PokemonLocationAreaEncounters {
  location_area: NamedApiResource;
  version_details: {
    max_chance: number;
    encounter_details: {
      min_level: number;
      max_level: number;
      condition_values: NamedApiResource[];
      chance: number;
      method: NamedApiResource;
    }[];
    version: NamedApiResource<GameVersion>;
  }[];
}

export interface PokemonHeldItems {
  item: NamedApiResource<Item>;
  version_details: {
    rarity: number;
    version: NamedApiResource<GameVersion>;
  }[];
}

export interface PokemonAbilities {
  is_hidden: boolean;
  slot: number;
  ability: NamedApiResource<Ability>;
}

export interface PokemonGameIndices {
  game_index: number;
  version: NamedApiResource<GameVersion>;
}

export interface PokemonMoves {
  move: NamedApiResource<Move>;
  version_group_details: PokemonVersionGroupDetails[];
  version_group_detail?: PokemonVersionGroupDetails;
  type: string;
}

export interface PokemonVersionGroupDetails {
  level_learned_at: number;
  version_group: PxGameVersionGroup;
  move_learn_method: NamedApiResource;
}
