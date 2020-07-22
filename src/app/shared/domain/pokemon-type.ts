import {NamedResource} from './named-resource';

export interface PokemonType {
  id: number;
  name: string;

  damage_relations: {
    no_damage_to: NamedResource[];
    half_damage_to: NamedResource[];
    double_damage_to: NamedResource[];
    no_damage_from: NamedResource[];
    half_damage_from: NamedResource[];
    double_damage_from: NamedResource[];
  };
  game_indices: {
    game_index: number;
    generation: NamedResource;
  }[];
  generation: NamedResource;
  move_damage_class: NamedResource;
  names: {
    name: string;
    language: NamedResource
  }[];
  pokemon: {
    slot: number;
    pokemon: NamedResource
  }[];
  moves: NamedResource[];
}
