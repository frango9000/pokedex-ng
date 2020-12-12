import { Pipe, PipeTransform } from '@angular/core';
import { PokeGenerationPipe } from './poke-generation.pipe';

describe('PokeGenerationPipe', () => {
  it('create an instance', () => {
    const pipe = new PokeGenerationPipe();
    expect(pipe).toBeTruthy();
  });
});

@Pipe({ name: 'pokeGeneration' })
export class PokeGenerationStubPipe implements PipeTransform, Partial<PokeGenerationPipe> {
  public transform = jest.fn();
}
