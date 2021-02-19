import { ApiName, ApiResource, NamedApiResource } from './domain';
import { ApiEffectChange, ApiEffectEntry, ApiFlavorTextEntry } from './pokemon-language';

export interface Ability extends ApiResource {
  id: number;
  is_main_series: boolean;
  name: string;
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
