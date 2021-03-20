import {
  Ability,
  ApiEntity,
  ApiName,
  LocalizedName,
  Move,
  NamedApiResource,
  PokemonType,
  Species,
  VersionGroup,
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
  types: NamedApiResource<PokemonType>[];
  version_groups: NamedApiResource<VersionGroup>[];
}

//Non Api Content, Used in templates

export interface SelectableGeneration {
  generation: PxGeneration;
  active: boolean;
}
