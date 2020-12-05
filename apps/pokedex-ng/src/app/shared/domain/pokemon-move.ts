import {
  ApiEffectChange,
  ApiEffectEntry,
  ApiFlavorTextEntry,
  ApiName,
  ApiNamedResource,
  ApiResource,
} from './api-resource';

export interface ApiNamedMove extends ApiNamedResource {
  type: string;
  names?: { name: string; language: string }[];
}

export interface PokemonMove {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;

  contest_combos: PokemonMoveContestCombos;
  contest_type: ApiNamedResource;
  contest_effect: ApiResource;
  damage_class: ApiNamedResource;
  effect_changes: ApiEffectChange[];
  effect_entries: ApiEffectEntry[];
  flavor_text_entries: ApiFlavorTextEntry[];
  generation: ApiNamedResource;
  machines: {
    machine: ApiResource;
    version_group: ApiNamedResource;
  }[];
  meta: PokemonMoveMetadata;
  names: ApiName[];
  past_values: [];
  stat_changes: {
    change: number;
    stat: ApiNamedResource;
  }[];
  super_contest_effect: ApiResource;
  target: ApiNamedResource;
  type: ApiNamedResource;
}

interface PokemonMoveMetadata {
  ailment: ApiNamedResource;
  category: ApiNamedResource;
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
}

interface PokemonMoveContestCombos {
  normal: {
    use_after: ApiNamedResource[];
    use_before: ApiNamedResource[];
  };
  super: {
    use_after: ApiNamedResource[];
    use_before: ApiNamedResource[];
  };
}
