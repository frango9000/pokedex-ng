import {
  ApiEffectChange,
  ApiEffectEntry,
  ApiFlavorTextEntry,
  ApiName,
  ApiNamedResource,
} from './api-resource';

export interface PokemonAbility {
  id: number;
  is_main_series: boolean;
  name: string;
  effect_changes: ApiEffectChange[];
  effect_entries: ApiEffectEntry[];
  flavor_text_entries: ApiFlavorTextEntry[];
  generation: ApiNamedResource;
  names: ApiName[];
  pokemon: {
    is_hidden: boolean;
    pokemon: ApiNamedResource;
    slot: number;
  }[];
}
