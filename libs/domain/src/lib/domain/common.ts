import { Generation } from '../games/generation';
import { VersionGroup } from '../games/version-group';
import { NamedApiResource } from './domain';
import { Language } from './language';

export interface ApiFlavorTextEntry {
  flavor_text: string;
  language: NamedApiResource;
  version_group: NamedApiResource<VersionGroup>;
}

export interface ApiEffectEntry {
  effect: string;
  short_effect: string;
  language: NamedApiResource<Language>;
}

export interface ApiEffectChange {
  effect_entries: ApiEffectEntry[];
  version_group: NamedApiResource<VersionGroup>;
}

export interface MachineVersionDetail {
  machine: NamedApiResource;
  version_group: VersionGroup;
}

export interface GenerationGameIndex {
  game_index: number;
  generation: NamedApiResource<Generation>;
}
