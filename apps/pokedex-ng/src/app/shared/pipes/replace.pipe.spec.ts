import { Pipe, PipeTransform } from '@angular/core';
import { ReplacePipe } from './replace.pipe';

describe('ReplacePipe', () => {
  it('create an instance', () => {
    const pipe = new ReplacePipe();
    expect(pipe).toBeTruthy();
  });
});

@Pipe({ name: 'replace' })
export class ReplaceStubPipe implements PipeTransform, Partial<ReplacePipe> {
  public transform = jest.fn();
}
