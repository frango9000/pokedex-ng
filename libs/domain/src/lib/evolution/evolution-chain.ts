import { ApiEntity, ApiName, NamedApiResource } from '@pokedex-ng/domain';
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
  item: NamedApiResource;
  trigger: NamedApiResource;
  gender: number;
  held_item: NamedApiResource;
  known_move_type: NamedApiResource;
  known_move: NamedApiResource;
  location: NamedApiResource;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: NamedApiResource;
  party_type: NamedApiResource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: NamedApiResource;
  turn_upside_down: boolean;

  //Non Api Content, Used in templates
  processed_details?: PokemonEvolutionTriggerDetails;
}

export interface EvolutionTrigger {
  id: number;
  name: string;
  names: ApiName[];
}

export interface PokemonEvolutionTriggerDetails {
  trigger: PokemonEvolutionTriggerDetail;
  conditions: PokemonEvolutionTriggerDetail[];
}

export interface PokemonEvolutionTriggerDetail {
  title: string;
  value?: number | string;
}
