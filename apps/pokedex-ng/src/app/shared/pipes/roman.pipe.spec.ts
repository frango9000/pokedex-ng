import { Pipe } from '@angular/core';
import { RomanPipe } from './roman.pipe';

describe('RomanPipe', () => {
  it('create an instance', () => {
    const pipe = new RomanPipe();
    expect(pipe).toBeTruthy();
  });
});

@Pipe({ name: 'roman' })
export class RomanPipeStub implements Partial<RomanPipe> {
  public transform = jest.fn();
}
