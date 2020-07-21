import {NamedResource} from './named-resource';

export interface PokemonAbility {
  id: number;
  is_main_series: boolean;
  name: string;
  effect_changes: {
    effect_entries: {
      effect: string;
      language: NamedResource
    }[];
    version_group: NamedResource;
  }[];
  effect_entries: {
    effect: string;
    language: NamedResource;
    short_effect: string;
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: NamedResource;
    version_group: NamedResource;
  }[];
  generation: NamedResource;
  names: {
    name: string;
    language: NamedResource;
  }[];
  pokemon: {
    is_hidden: boolean;
    pokemon: NamedResource;
    slot: number;
  }[];

}
