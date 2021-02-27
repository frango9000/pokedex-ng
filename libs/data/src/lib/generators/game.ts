import { GameVersionGroup, Generation, PxGameVersionGroup } from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';

export class VersionGroupGenerator extends AbstractGenerator<GameVersionGroup, PxGameVersionGroup> {
  getResourceName(): string {
    return 'version-group';
  }

  mapResource(resource: GameVersionGroup): PxGameVersionGroup {
    return {
      name: resource.name,
      id: resource.id,
      generation: this.getId(resource.generation.url),
      order: resource.order,
      versions: resource.versions.map((value) => value.name),
    };
  }
}

export class GenerationGenerator extends AbstractGenerator<Generation, Generation> {
  getResourceName(): string {
    return 'generation';
  }

  mapResource(resource: Generation): Generation {
    return resource;
  }
}
