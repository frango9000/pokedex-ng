import { PokemonLanguage } from './pokemon-language';

export interface NamedAPIResourceList<T extends NamedApiResource = NamedApiResource> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface ApiResource {
  id?: number;
  name?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface NamedApiResource<T extends ApiResource = ApiResource> extends ApiResource {
  url?: string;
}

export interface ApiName {
  name: string;
  language: NamedApiResource<PokemonLanguage>;
}
