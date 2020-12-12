import { Pipe, PipeTransform } from '@angular/core';
import { RomanPipe } from './roman.pipe';

describe('RomanPipe', () => {
  it('create an instance', () => {
    const pipe = new RomanPipe();
    expect(pipe).toBeTruthy();
  });
});

@Pipe({ name: 'roman' })
export class RomanStubPipe implements PipeTransform, Partial<RomanPipe> {
  public transform = jest.fn();
}
