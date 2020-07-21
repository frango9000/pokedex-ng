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
  contest_effect: Resource;
  damage_class: NamedResource;
  effect_changes: {
    effect_entries: {
      effect: string;
      language: NamedResource
    }[];
    version_group: NamedResource
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
  machines: {
    machine: Resource;
    version_group: NamedResource;
  }[];
  meta: {
    ailment: NamedResource;
    category: NamedResource;
    min_hits: number;
    max_hits: number;
    min_turns: number;
    max_turns: number;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
  };
  names: {
    name: string;
    language: NamedResource
  }[];
  past_values: [];
  stat_changes: {
    change: number;
    stat: NamedResource
  }[];
  super_contest_effect: Resource;
  target: NamedResource;
  type: NamedResource;
}
