import { ApiDescription, ApiEntity, ApiName, FlavorText, Language, NamedApiResource } from '@pokedex-ng/domain';

export interface Species extends ApiEntity {
  id: number;
  name: string;
  base_happiness: number;
  capture_rate: number;
  forms_switchable: boolean;
  gender_rate: number;
  genera: PokemonSpeciesGenera[];
  has_gender_differences: boolean;
  hatch_counter: number;
  is_baby: boolean;
  order: number;
  generation: NamedApiResource;
  growth_rate: NamedApiResource;
  habitat: NamedApiResource;
  shape: NamedApiResource;
  color: NamedApiResource;
  evolves_from_species: NamedApiResource;
  evolution_chain: NamedApiResource;
  egg_groups: NamedApiResource[];
  flavor_text_entries: FlavorText[];
  form_descriptions: {
    description: string;
    language: NamedApiResource;
  }[];
  names: ApiName[];
  park_pal_encounters: {
    area: NamedApiResource;
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: NamedApiResource;
  }[];
  varieties: {
    is_default: boolean;
    pokemon: NamedApiResource;
  }[];
}

export interface PokemonSpeciesGenera {
  genus: string;
  language: NamedApiResource;
}

export interface EggGroup extends ApiEntity {
  id: number;
  name: string;
  names: ApiName[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface GrowthRate extends ApiEntity {
  id: number;
  name: string;
  formula: string;
  descriptions: ApiDescription[];
  levels: { level: number; experience: number }[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PokemonColor extends ApiEntity {
  id: number;
  name: string;
  names: ApiName[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PokemonHabitat extends ApiEntity {
  id: number;
  name: string;
  names: ApiName[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PokemonShape extends ApiEntity {
  id: number;
  name: string;
  names: ApiName[];
  awesome_names: AwesomeName[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface AwesomeName {
  awesome_name: string;
  language: NamedApiResource<Language>;
}
