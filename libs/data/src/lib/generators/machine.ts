import { Machine, PokedexMachine } from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';

export class MachineGenerator extends AbstractGenerator<Machine, PokedexMachine> {
  getResourceName(): string {
    return 'machine';
  }

  mapResource(resource: Machine): PokedexMachine {
    return {
      item: resource.item.name,
      move: resource.move.name,
      version_group: resource.version_group.name,
    };
  }
}
