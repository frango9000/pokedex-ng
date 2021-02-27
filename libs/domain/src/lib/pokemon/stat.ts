import {
  ApiEntity,
  ApiName,
  LocalizedName,
  Move,
  MoveDamageClass,
  NamedApiResource,
  PokedexResource,
} from '@pokedex-ng/domain';

export interface PxStat extends PokedexResource {
  id: number;
  name: string;
  names: LocalizedName[];
}

export interface Stat extends ApiEntity {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: MoveStatAffectSets;
  affecting_natures: NatureStatAffectSets;
  characteristics: NamedApiResource[]; //characteristic
  move_damage_class: NamedApiResource<MoveDamageClass>;
  names: ApiName[];
}

export interface MoveStatAffectSets {
  increase: MoveStatAffect[];
  decrease: MoveStatAffect[];
}

export interface MoveStatAffect {
  change: number;
  move: NamedApiResource<Move>;
}

export interface NatureStatAffectSets {
  increase: NamedApiResource[]; //nature
  decrease: NamedApiResource[]; //nature
}
