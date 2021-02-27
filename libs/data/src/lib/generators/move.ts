import { Move, PxMove } from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';

export class MovesGenerator extends AbstractGenerator<Move, PxMove> {
  getResourceName(): string {
    return 'move';
  }

  mapResource(resource: Move): PxMove {
    return {
      name: resource.name,
      id: resource.id,
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
