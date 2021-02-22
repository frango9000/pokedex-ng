import { ApiName, ApiResource, NamedApiResource } from './domain';
import { Generation } from './generation';
import { ApiEffectChange, ApiEffectEntry, ApiFlavorTextEntry, LocalizedName } from './pokemon-language';
import { PokemonType } from './pokemon-type';

export interface NamedApiMove extends NamedApiResource<Move> {
  accuracy?: number;
  crit_rate?: number;
  generation?: number;
  names?: LocalizedName[];
  power?: number;
  pp?: number;
  type?: string;
}

export interface Move extends ApiResource {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;

  contest_combos: PokemonMoveContestCombos;
  contest_type: NamedApiResource;
  contest_effect: NamedApiResource;
  damage_class: NamedApiResource;
  effect_changes: ApiEffectChange[];
  effect_entries: ApiEffectEntry[];
  flavor_text_entries: ApiFlavorTextEntry[];
  generation: NamedApiResource<Generation>;
  machines: {
    machine: NamedApiResource;
    version_group: NamedApiResource;
  }[];
  meta: PokemonMoveMetadata;
  names: ApiName[];
  past_values: [];
  stat_changes: {
    change: number;
    stat: NamedApiResource;
  }[];
  super_contest_effect: NamedApiResource;
  target: NamedApiResource;
  type: NamedApiResource<PokemonType>;
}

interface PokemonMoveMetadata {
  ailment: NamedApiResource;
  category: NamedApiResource;
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
    use_after: NamedApiResource[];
    use_before: NamedApiResource[];
  };
  super: {
    use_after: NamedApiResource[];
    use_before: NamedApiResource[];
  };
}

export enum MoveLearnMethod {
  LEVEL_UP_METHOD = 'level-up',
  MACHINE_METHOD = 'machine',
  EGG_METHOD = 'egg',
  TUTOR_METHOD = 'tutor',
}
