import { Pipe, PipeTransform } from '@angular/core';
import { ExpandableResourcesPipe } from './expandable-resources.pipe';
import { PokeGenerationPipe } from './poke-generation.pipe';
import { PokeTypeColorPipe } from './poke-type-color.pipe';
import { ReplacePipe } from './replace.pipe';
import { ResourceIdPipe } from './resource-id.pipe';
import { RomanPipe } from './roman.pipe';

@Pipe({ name: 'pokeTypeColor' })
export class StubPokeTypeColorPipe implements PipeTransform, Partial<PokeTypeColorPipe> {
  public transform = jest.fn();
}

@Pipe({ name: 'pokeGeneration' })
export class StubPokeGenerationPipe implements PipeTransform, Partial<PokeGenerationPipe> {
  public transform = jest.fn();
}

@Pipe({ name: 'expandableResources' })
export class StubExpandableResourcesPipe implements PipeTransform, Partial<ExpandableResourcesPipe> {
  public transform = jest.fn(() => []);
}

@Pipe({ name: 'replace' })
export class StubReplacePipe implements PipeTransform, Partial<ReplacePipe> {
  public transform = jest.fn();
}

@Pipe({ name: 'resourceId' })
export class StubResourceIdPipe implements PipeTransform, Partial<ResourceIdPipe> {
  public transform = jest.fn();
}

@Pipe({ name: 'roman' })
export class StubRomanPipe implements PipeTransform, Partial<RomanPipe> {
  public transform = jest.fn();
}
