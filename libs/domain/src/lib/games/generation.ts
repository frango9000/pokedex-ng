import {
  Ability,
  ApiEntity,
  ApiName,
  Move,
  NamedApiResource,
  PokedexResource,
  PokeType,
  PxGameVersionGroup,
  Species,
} from '@pokedex-ng/domain';

export interface PxGeneration extends PokedexResource {
  abilities: NamedApiResource<Ability>[];
  names: ApiName[];
  main_region: NamedApiResource;
  moves: NamedApiResource<Move>[];
  pokemon_species: NamedApiResource<Species>[];
  types: NamedApiResource<PokeType>[];
  version_groups: PxGameVersionGroup[];
}

export interface Generation extends ApiEntity {
  abilities: NamedApiResource<Ability>[];
  names: ApiName[];
  main_region: NamedApiResource;
  moves: NamedApiResource<Move>[];
  pokemon_species: NamedApiResource<Species>[];
  types: NamedApiResource<PokeType>[];
  version_groups: PxGameVersionGroup[];
}

export interface GenerationGameIndex {
  game_index: number;
  generation: NamedApiResource<Generation>;
}

export interface SelectableGeneration {
  generation: Generation;
  active: boolean;
}
