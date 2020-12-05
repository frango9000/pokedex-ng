import { ApiNamedResource } from './api-resource';

export interface PokemonVersionGroup {
  name: string;
  id: number;
  order: number;
  generation: ApiNamedResource;
  move_learn_method: ApiNamedResource[];
  pokedexes: ApiNamedResource[];
  regions: ApiNamedResource[];
  versions: ApiNamedResource[];
}

export interface ApiNamedVersionGroup extends ApiNamedResource {
  generation?: string;
  order?: number;
  versions?: string[];
}
