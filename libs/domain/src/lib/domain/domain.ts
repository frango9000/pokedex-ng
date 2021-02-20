import { PokemonLanguage } from './pokemon-language';

export interface NamedApiResourceList<T extends NamedApiResource = NamedApiResource> {
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

export function getId(url: string): number {
  return Number(url.split('/').reverse()[1]) || 0;
}
