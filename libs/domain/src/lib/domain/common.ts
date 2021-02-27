import { GameVersionGroup } from '../games/game-version';
import { NamedApiResource } from './domain';
import { Language } from './language';

export interface ApiFlavorTextEntry {
  flavor_text: string;
  language: NamedApiResource;
  version_group: NamedApiResource<GameVersionGroup>;
}

export interface ApiEffectEntry {
  effect: string;
  short_effect: string;
  language: NamedApiResource<Language>;
}

export interface ApiEffectChange {
  effect_entries: ApiEffectEntry[];
  version_group: NamedApiResource<GameVersionGroup>;
}
