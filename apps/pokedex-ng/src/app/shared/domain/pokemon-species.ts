import { ApiNamedResource, ApiResource } from './api-resource';

export interface PokemonSpecies {
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
  generation: ApiNamedResource;
  growth_rate: ApiNamedResource;
  habitat: ApiNamedResource;
  shape: ApiNamedResource;
  color: ApiNamedResource;
  evolves_from_species: ApiNamedResource;
  evolution_chain: ApiResource;
  egg_groups: ApiNamedResource[];
  flavor_text_entries: PokemonSpeciesFlavorTextEntry[];
  form_descriptions: {
    description: string;
    language: ApiNamedResource;
  }[];
  park_pal_encounters: {
    area: ApiNamedResource;
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: ApiNamedResource;
  }[];
  varieties: {
    is_default: boolean;
    pokemon: ApiNamedResource;
  }[];
}

interface PokemonSpeciesFlavorTextEntry {
  flavor_text: string;
  language: ApiNamedResource;
  version: ApiNamedResource;
}

interface PokemonSpeciesGenera {
  genus: string;
  language: ApiNamedResource;
}
