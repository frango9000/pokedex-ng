import { Ability } from './ability';
import { ApiResource, NamedApiResource } from './domain';
import { GameVersion, NamedApiVersionGroup } from './game-version';
import { Item } from './item';
import { Move } from './move';
import { PokemonType } from './pokemon-type';
import { Species } from './species';

export interface NamedApiPokemon extends NamedApiResource<Pokemon> {
  types: string[];
}

export interface Pokemon extends ApiResource {
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
  types: PokemonTypes[];
}

export interface PokemonTypes {
  slot: number;
  type: NamedApiResource<PokemonType>;
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
}

export interface PokemonVersionGroupDetails {
  level_learned_at: number;
  version_group: NamedApiVersionGroup;
  move_learn_method: NamedApiResource;
}
