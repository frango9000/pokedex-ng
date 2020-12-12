import { Pipe, PipeTransform } from '@angular/core';
import { PokeTypeColorPipe } from './poke-type-color.pipe';

describe('PokeTypeColorPipe', () => {
  it('create an instance', () => {
    const pipe = new PokeTypeColorPipe();
    expect(pipe).toBeTruthy();
  });
});

@Pipe({ name: 'pokeTypeColor' })
export class PokeTypeColorStubPipe implements PipeTransform, Partial<PokeTypeColorPipe> {
  public transform = jest.fn();
}
