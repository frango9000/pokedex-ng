import { ApiName, ApiResource, NamedApiResource } from './domain';
import { Generation } from './generation';

export interface VersionGroup extends ApiResource {
  name: string;
  id: number;
  order: number;
  generation: NamedApiResource<Generation>;
  move_learn_method: NamedApiResource[];
  pokedexes: NamedApiResource[];
  regions: NamedApiResource[];
  versions: NamedApiResource<GameVersion>[];
}

export interface NamedApiVersionGroup extends NamedApiResource<VersionGroup> {
  generation?: string;
  order?: number;
  versions?: string[];
}

export interface GameVersion extends ApiResource {
  names: ApiName[];
  version_group: NamedApiVersionGroup;
}
