import { ApiName, NamedApiResource } from './domain';

export interface NamedApiPokemonType extends NamedApiResource<PokemonType> {
  damage_relations?: {
    double_damage_from?: string[];
    double_damage_to?: string[];
    half_damage_from?: string[];
    half_damage_to?: string[];
    no_damage_from?: string[];
    no_damage_to?: string[];
  };
}

export interface PokemonType {
  id: number;
  name: string;

  damage_relations: PokemonTypeDamageRelations;
  game_indices: {
    game_index: number;
    generation: NamedApiResource;
  }[];
  generation: NamedApiResource;
  move_damage_class: NamedApiResource;
  names: ApiName[];
  pokemon: {
    slot: number;
    pokemon: NamedApiResource;
  }[];
  moves: NamedApiResource[];
}

interface PokemonTypeDamageRelations {
  no_damage_to: NamedApiResource[];
  half_damage_to: NamedApiResource[];
  double_damage_to: NamedApiResource[];
  no_damage_from: NamedApiResource[];
  half_damage_from: NamedApiResource[];
  double_damage_from: NamedApiResource[];
}
