import { ApiEntity, Item, Machine, Move, NamedApiResource, PxMachine } from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap, retry } from 'rxjs/operators';
import { Axios } from 'axios-observable';

export class MachineGenerator extends AbstractGenerator<MachineWithItemAndMove, PxMachine> {
  constructor() {
    super('machine');
  }

  mapResource(resource: MachineWithItemAndMove): PxMachine {
    return {
      id: resource.machine.id,
      version_group: resource.machine.version_group.name,
      item: {
        id: resource.item.id,
        name: resource.item.name,
        sprite: resource.item.sprites.default.substring(71),
        cost: resource.item.cost,
      },
      move: {
        id: resource.move.id,
        name: resource.move.name,
        accuracy: resource.move.accuracy,
        pp: resource.move.pp,
        power: resource.move.power,
        type: resource.move.type.name,
      },
    };
  }

  protected _fetchOne(namedApiResource: NamedApiResource<Machine>): Observable<MachineWithItemAndMove> {
    return super._fetchOne(namedApiResource).pipe(
      map((machine) => (machine as any) as Machine),
      mergeMap((machine: Machine) =>
        forkJoin({
          machine: of(machine),
          item: Axios.get<Item>(machine.item.url).pipe(
            retry(10),
            map((value) => value.data)
          ),
          move: Axios.get<Move>(machine.move.url).pipe(
            retry(10),
            map((value) => value.data)
          ),
        })
      )
    );
  }
}

interface MachineWithItemAndMove extends ApiEntity {
  machine: Machine;
  item: Item;
  move: Move;
}
