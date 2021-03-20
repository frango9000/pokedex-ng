import {
  ApiEntity,
  ApiName,
  Generation,
  GenerationGameIndex,
  NamedApiResource,
  VersionGroup,
} from '@pokedex-ng/domain';

export interface PokemonLocation extends ApiEntity {
  id: number;
  name: string;
  region: NamedApiResource<Region>;
  names: ApiName[];
  game_indices: GenerationGameIndex[];
  areas: NamedApiResource<LocationArea>[];
}

export interface LocationArea extends ApiEntity {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: [];
  location: NamedApiResource<PokemonLocation>;
  names: ApiName[];
  pokemon_encounters: [];
}

export interface Region extends ApiEntity {
  id: number;
  name: string;
  locations: NamedApiResource<PokemonLocation>[];
  names: ApiName[];
  main_generation: NamedApiResource<Generation>;
  pokedexes: NamedApiResource[];
  version_groups: NamedApiResource<VersionGroup>[];
}
