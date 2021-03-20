import { Generation, PxGeneration, PxVersionGroup, VersionGroup } from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';

export class VersionGroupGenerator extends AbstractGenerator<VersionGroup, PxVersionGroup> {
  constructor() {
    super('version-group');
  }

  mapResource(resource: VersionGroup): PxVersionGroup {
    return {
      id: resource.id,
      name: resource.name,
      generation: this.getId(resource.generation.url),
      order: resource.order,
      versions: this.mapNamedApiResourcesToNames(resource.versions),
    };
  }
}

export class GenerationGenerator extends AbstractGenerator<Generation, PxGeneration> {
  constructor() {
    super('generation');
  }

  mapResource(resource: Generation): PxGeneration {
    return {
      id: resource.id,
      name: resource.name,
      abilities: this.mapNamedApiResourcesToNames(resource.abilities),
      main_region: resource.main_region.name,
      moves: this.mapNamedApiResourcesToNames(resource.moves),
      names: this.filterAndMapNames(resource.names),
      pokemon_species: this.mapNamedApiResourcesToNames(resource.pokemon_species),
      types: this.mapNamedApiResourcesToNames(resource.types),
      version_groups: this.mapNamedApiResourcesToNames(resource.version_groups),
    };
  }
}
