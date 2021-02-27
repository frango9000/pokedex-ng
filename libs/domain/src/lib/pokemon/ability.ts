import {
  ApiEffectChange,
  ApiEffectEntry,
  ApiEntity,
  ApiFlavorTextEntry,
  ApiName,
  LocalizedName,
  NamedApiResource,
} from '@pokedex-ng/domain';

export interface PxAbility extends ApiEntity {
  generation: number;
  names: LocalizedName[];
}

export interface Ability extends ApiEntity {
  id: number;
  name: string;
  is_main_series: boolean;
  effect_changes: ApiEffectChange[];
  effect_entries: ApiEffectEntry[];
  flavor_text_entries: ApiFlavorTextEntry[];
  generation: NamedApiResource;
  names: ApiName[];
  pokemon: {
    is_hidden: boolean;
    pokemon: NamedApiResource;
    slot: number;
  }[];
}
