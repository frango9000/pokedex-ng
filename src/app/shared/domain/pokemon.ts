import {ApiNamedResource} from './api-resource';

export interface ApiNamedPokemon extends ApiNamedResource {
  types: string[];
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;
  species: ApiNamedResource;
  forms: ApiNamedResource[];
  moves: PokemonMoves[];
  abilities: PokemonAbilities[];
  game_indices: PokemonGameIndices[];
  held_items: PokemonHeldItems[];
  location_area_encounters: PokemonLocationAreaEncounters[];
  sprites: PokemonSprites;
  stats: PokemonStats[];
  types: PokemonTypes[];

}

export interface PokemonTypes {
  slot: number;
  type: ApiNamedResource;
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: ApiNamedResource;
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
  location_area: ApiNamedResource;
  version_details: {
    max_chance: number,
    encounter_details: {
      min_level: number;
      max_level: number;
      condition_values: ApiNamedResource[],
      chance: number,
      method: ApiNamedResource;
    }[],
    version: ApiNamedResource
  }[];
}

export interface PokemonHeldItems {
  item: ApiNamedResource;
  version_details: {
    rarity: number,
    version: ApiNamedResource
  }[];
}

export interface PokemonAbilities {
  is_hidden: boolean;
  slot: number;
  ability: ApiNamedResource;
}

export interface PokemonGameIndices {
  game_index: number;
  version: ApiNamedResource;
}

export interface PokemonMoves {
  move: ApiNamedResource;
  version_group_details: PokemonVersionGroupDetails[];
}

export interface PokemonVersionGroupDetails {
  level_learned_at: number;
  version_group: ApiNamedResource;
  move_learn_method: ApiNamedResource;
}
