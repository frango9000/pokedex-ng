import {
  Ability,
  ApiEntity,
  ApiName,
  GameVersionGroup,
  LocalizedName,
  Move,
  NamedApiResource,
  PokeType,
  Species,
} from '@pokedex-ng/domain';

export interface PxGeneration extends ApiEntity {
  abilities: string[];
  names: LocalizedName[];
  main_region: string;
  moves: string[];
  pokemon_species: string[];
  types: string[];
  version_groups: string[];
}

export interface Generation extends ApiEntity {
  abilities: NamedApiResource<Ability>[];
  names: ApiName[];
  main_region: NamedApiResource;
  moves: NamedApiResource<Move>[];
  pokemon_species: NamedApiResource<Species>[];
  types: NamedApiResource<PokeType>[];
  version_groups: NamedApiResource<GameVersionGroup>[];
}

export interface GenerationGameIndex {
  game_index: number;
  generation: NamedApiResource<Generation>;
}

export interface SelectableGeneration {
  generation: PxGeneration;
  active: boolean;
}
