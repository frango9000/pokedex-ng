import {ApiName, ApiNamedResource} from './api-resource';

export interface PokemonType {
  id: number;
  name: string;

  damage_relations: PokemonTypeDamageRelations;
  game_indices: {
    game_index: number;
    generation: ApiNamedResource;
  }[];
  generation: ApiNamedResource;
  move_damage_class: ApiNamedResource;
  names: ApiName[];
  pokemon: {
    slot: number;
    pokemon: ApiNamedResource
  }[];
  moves: ApiNamedResource[];
}

interface PokemonTypeDamageRelations {
  no_damage_to: ApiNamedResource[];
  half_damage_to: ApiNamedResource[];
  double_damage_to: ApiNamedResource[];
  no_damage_from: ApiNamedResource[];
  half_damage_from: ApiNamedResource[];
  double_damage_from: ApiNamedResource[];
}
