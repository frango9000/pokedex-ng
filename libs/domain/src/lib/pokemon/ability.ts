import {
  ApiEffectChange,
  ApiEffectEntry,
  ApiEntity,
  ApiName,
  Language,
  LocalizedName,
  NamedApiResource,
  VersionGroup,
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
  flavor_text_entries: AbilityFlavorText[];
  generation: NamedApiResource;
  names: ApiName[];
  pokemon: {
    is_hidden: boolean;
    pokemon: NamedApiResource;
    slot: number;
  }[];
}

export interface AbilityFlavorText {
  flavor_text: string;
  language: NamedApiResource<Language>;
  version_group: NamedApiResource<VersionGroup>;
}
