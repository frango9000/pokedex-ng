import { ApiEntity, ApiName, LocalizedName, NamedApiResource } from '@pokedex-ng/domain';

export interface PxTypeDamageRelations {
  double_damage_from?: string[];
  double_damage_to?: string[];
  half_damage_from?: string[];
  half_damage_to?: string[];
  no_damage_from?: string[];
  no_damage_to?: string[];
}

export interface PxType extends ApiEntity {
  names?: LocalizedName[];
  generation: string;
  move_damage_class: string;
  damage_relations?: PxTypeDamageRelations;
}

export interface PokemonType extends ApiEntity {
  id: number;
  name: string;
  damage_relations: PokemonTypeDamageRelations;
  game_indices: {
    game_index: number;
    generation: NamedApiResource;
  }[];
  generation: NamedApiResource;
  move_damage_class: NamedApiResource;
  names: ApiName[];
  pokemon: {
    slot: number;
    pokemon: NamedApiResource;
  }[];
  moves: NamedApiResource[];
}

export interface PokemonTypeDamageRelations {
  no_damage_to: NamedApiResource[];
  half_damage_to: NamedApiResource[];
  double_damage_to: NamedApiResource[];
  no_damage_from: NamedApiResource[];
  half_damage_from: NamedApiResource[];
  double_damage_from: NamedApiResource[];
}

interface TypeDamageEntry {
  name: string;
  multiplier: number;
}

export interface TypeDamages {
  attacking: AttackingTypeDamages;
  defending: DefendingTypeDamages;
}

export interface AttackingTypeDamages {
  weaknesses: TypeDamageEntry[];
  strengths: TypeDamageEntry[];
}

export interface DefendingTypeDamages {
  weaknesses: TypeDamageEntry[];
  resistances: TypeDamageEntry[];
}

export enum TypeDamagesContext {
  ATTACKING = 'attacking',
  DEFENDING = 'defending',
}
