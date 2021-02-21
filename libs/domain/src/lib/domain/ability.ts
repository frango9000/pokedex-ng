import { ApiName, ApiResource, NamedApiResource } from './domain';
import { ApiEffectChange, ApiEffectEntry, ApiFlavorTextEntry, LocalizedName } from './pokemon-language';

export interface NamedApiAbility extends NamedApiResource<Ability> {
  generation: number;
  names: LocalizedName[];
}

export interface Ability extends ApiResource {
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
