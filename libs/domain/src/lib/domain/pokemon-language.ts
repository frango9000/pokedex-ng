import { ApiName, ApiResource, NamedApiResource } from './domain';
import { GameVersionGroup } from './game-version';

export interface PokemonLanguage extends ApiResource {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: ApiName[];
}

export interface NamedApiLanguage extends NamedApiResource<PokemonLanguage> {
  iso3166: string;
  names?: LocalizedName[];
}

export interface ApiFlavorTextEntry {
  flavor_text: string;
  language: NamedApiResource;
  version_group: NamedApiResource<GameVersionGroup>;
}

export interface ApiEffectEntry {
  effect: string;
  short_effect: string;
  language: NamedApiResource<PokemonLanguage>;
}

export interface ApiEffectChange {
  effect_entries: ApiEffectEntry[];
  version_group: NamedApiResource<GameVersionGroup>;
}

export interface LocalizedName {
  name: string;
  language: string;
}
