import { Move, MoveLearnMethod, PxMove, PxMoveLearnMethod } from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';

export class MovesGenerator extends AbstractGenerator<Move, PxMove> {
  constructor() {
    super('move');
  }

  mapResource(resource: Move): PxMove {
    return {
      id: resource.id,
      name: resource.name,
      accuracy: resource.accuracy,
      crit_rate: resource.meta?.crit_rate,
      generation: this.getId(resource.generation?.url),
      names: this.filterAndMapNames(resource.names),
      power: resource.power,
      pp: resource.pp,
      type: resource.type.name,
    };
  }
}

export class MoveLearnMethodGenerator extends AbstractGenerator<MoveLearnMethod, PxMoveLearnMethod> {
  constructor() {
    super('move-learn-method');
  }

  protected mapResource(resource: MoveLearnMethod): PxMoveLearnMethod {
    return {
      id: resource.id,
      name: resource.name,
      names: this.filterAndMapNames(resource.names),
      descriptions: this.filterAndMapDescriptions(resource.descriptions),
    };
  }
}
