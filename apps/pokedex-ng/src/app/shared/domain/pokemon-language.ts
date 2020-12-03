import { ApiName, ApiNamedResource } from './api-resource';

export interface PokemonLanguage {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: ApiName;
}

export interface ApiNamedLanguage extends ApiNamedResource {
  iso3166: string;
}
