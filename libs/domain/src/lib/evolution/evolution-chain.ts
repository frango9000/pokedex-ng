import {
  ApiEntity,
  ApiName,
  Item,
  Move,
  NamedApiResource,
  PokemonLocation,
  PokemonType,
  Species,
} from '@pokedex-ng/domain';
import { Observable } from 'rxjs';

export interface EvolutionChain extends ApiEntity {
  id: number;
  baby_trigger_item: NamedApiResource;
  chain: EvolutionChainLink;
}

export interface EvolutionChainLink {
  is_baby: boolean;
  species: NamedApiResource;
  evolution_details: EvolutionDetail[];
  evolves_to?: EvolutionChainLink[];

  //Non Api Content, Used in templates
  self$?: Observable<EvolutionChainLink>;
}

export interface EvolutionDetail {
  item: NamedApiResource<Item>;
  trigger: NamedApiResource<EvolutionTrigger>;
  gender: number;
  held_item: NamedApiResource<Item>;
  known_move_type: NamedApiResource<PokemonType>;
  known_move: NamedApiResource<Move>;
  location: NamedApiResource<PokemonLocation>;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: NamedApiResource<Species>;
  party_type: NamedApiResource<PokemonType>;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: NamedApiResource<Species>;
  turn_upside_down: boolean;

  //Non Api Content, Used in templates
  processed_details?: PokemonEvolutionTriggerDetails;
}

export interface EvolutionTrigger {
  id: number;
  name: string;
  names: ApiName[];
  pokemon_species: NamedApiResource<Species>[];
}

//Non Api Content, Used in templates

export interface PokemonEvolutionTriggerDetails {
  trigger: PokemonEvolutionTriggerDetail;
  conditions: PokemonEvolutionTriggerDetail[];
}

export interface PokemonEvolutionTriggerDetail {
  title: string;
  value?: number | string;
  translation?: string;
}
