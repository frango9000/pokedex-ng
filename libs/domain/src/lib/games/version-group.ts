import { ApiEntity, GameVersion, Generation, NamedApiResource } from '@pokedex-ng/domain';

export interface PxVersionGroup extends ApiEntity {
  generation?: number;
  order?: number;
  versions?: string[];
}

export interface VersionGroup extends ApiEntity {
  name: string;
  id: number;
  order: number;
  generation: NamedApiResource<Generation>;
  move_learn_method: NamedApiResource[];
  pokedexes: NamedApiResource[];
  regions: NamedApiResource[];
  versions: NamedApiResource<GameVersion>[];
}
