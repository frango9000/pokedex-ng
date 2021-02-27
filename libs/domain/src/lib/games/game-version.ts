import { ApiEntity, ApiName, Generation, NamedApiResource } from '@pokedex-ng/domain';

export interface PxGameVersionGroup extends ApiEntity {
  generation?: number;
  order?: number;
  versions?: string[];
}

export interface GameVersion extends ApiEntity {
  names: ApiName[];
  version_group: GameVersionGroup;
}

export interface GameVersionGroup extends ApiEntity {
  name: string;
  id: number;
  order: number;
  generation: NamedApiResource<Generation>;
  move_learn_method: NamedApiResource[];
  pokedexes: NamedApiResource[];
  regions: NamedApiResource[];
  versions: NamedApiResource<GameVersion>[];
}
