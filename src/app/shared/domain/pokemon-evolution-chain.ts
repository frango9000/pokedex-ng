import {ApiName, ApiNamedResource} from './api-resource';

export interface PokemonEvolutionChain {
  id: number;
  baby_trigger_item: ApiNamedResource;
  chain: PokemonEvolutionChainLink;
}

export interface PokemonEvolutionChainLink {
  is_baby: boolean;
  species: ApiNamedResource;
  evolution_details: PokemonEvolutionDetail[];
  evolves_to?: PokemonEvolutionChainLink[];
}

export interface PokemonEvolutionDetail {
  item: ApiNamedResource;
  trigger: ApiNamedResource;
  gender: number;
  held_item: ApiNamedResource;
  known_move_type: ApiNamedResource;
  known_move: ApiNamedResource;
  location: ApiNamedResource;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: ApiNamedResource;
  party_type: ApiNamedResource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: ApiNamedResource;
  turn_upside_down: boolean;
}

export interface PokemonEvolutionTrigger {
  id: number;
  name: string;
  names: ApiName[];
}
