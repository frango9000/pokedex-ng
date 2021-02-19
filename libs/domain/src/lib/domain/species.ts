import { ApiResource, NamedApiResource } from './domain';

export interface Species extends ApiResource {
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
  flavor_text_entries: PokemonSpeciesFlavorTextEntry[];
  form_descriptions: {
    description: string;
    language: NamedApiResource;
  }[];
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

interface PokemonSpeciesFlavorTextEntry {
  flavor_text: string;
  language: NamedApiResource;
  version: NamedApiResource;
}

interface PokemonSpeciesGenera {
  genus: string;
  language: NamedApiResource;
}
