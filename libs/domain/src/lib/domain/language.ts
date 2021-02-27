import { ApiEntity, ApiName } from './domain';
import { LocalizedName, PokedexResource } from './pokedex';

export interface Language extends ApiEntity {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: ApiName[];
}

export interface PxLanguage extends PokedexResource {
  iso3166: string;
  names?: LocalizedName[];
}
