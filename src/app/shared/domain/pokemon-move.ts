import {NamedResource} from './named-resource';
import {Resource} from './resource';

export interface PokemonMove {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;

  contest_combos: {
    normal: {
      use_after: NamedResource[];
      use_before: NamedResource[];
    };
    super: {
      use_after: NamedResource[];
      use_before: NamedResource[];
    };
  };
  contest_type: NamedResource;
  damage_class: NamedResource;
  effect_changes: [];
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
  meta: {};
  names: {
    name: string;
    language: NamedResource
  }[];
  super_contest_effect: Resource;
  target: NamedResource;
  type: NamedResource;
}
