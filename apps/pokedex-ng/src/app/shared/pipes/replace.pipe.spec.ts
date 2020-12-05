import { Pipe } from '@angular/core';
import { ReplacePipe } from './replace.pipe';

describe('ReplacePipe', () => {
  it('create an instance', () => {
    const pipe = new ReplacePipe();
    expect(pipe).toBeTruthy();
  });
});

@Pipe({ name: 'replace' })
export class ReplacePipeStub implements Partial<ReplacePipe> {
  public transform = jest.fn();
}
