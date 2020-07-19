import {NamedResource} from './named-resource';
import {Resource} from './resource';

export interface PokemonSpecies {
  id: number;
  name: string;
  base_happiness: number;
  capture_rate: number;
  forms_switchable: boolean;
  gender_rate: number;
  has_gender_differences: boolean;
  hatch_encounter: number;
  is_baby: boolean;
  order: number;
  generation: NamedResource;
  growth_rate: NamedResource;
  habitat: NamedResource;
  shape: NamedResource;
  color: NamedResource;
  evolves_from_species: NamedResource;
  evolution_chain: Resource;
  egg_groups: [NamedResource];
  flavor_text_entries: [{
    flavor_text: string;
    language: NamedResource;
    version: NamedResource
  }];
  form_descriptions: [{
    description: string;
    language: NamedResource;
  }];
  park_pal_encounters: [{
    area: NamedResource;
    base_score: number;
    rate: number;
  }];
  pokedex_numbers: [{
    entry_number: number,
    pokedex: NamedResource
  }];
  varieties: [{
    is_default: boolean;
    pokemon: NamedResource
  }];
}
