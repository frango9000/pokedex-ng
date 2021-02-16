import {
  Ability,
  ApiName,
  ApiResource,
  Move,
  NamedApiResource,
  NamedApiVersionGroup,
  PokemonType,
  Species,
} from '@pokedex-ng/domain';

export interface Generation extends ApiResource {
  abilities: NamedApiResource<Ability>[];
  names: ApiName[];
  main_region: NamedApiResource;
  moves: NamedApiResource<Move>[];
  pokemon_species: NamedApiResource<Species>[];
  types: NamedApiResource<PokemonType>[];
  version_groups: NamedApiVersionGroup[];
}

export interface GenerationGameIndex {
  game_index: number;
  generation: NamedApiResource<Generation>;
}
