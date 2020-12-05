import { Pipe } from '@angular/core';
import { ExpandableResourcesPipe } from './expandable-resources.pipe';

describe('ExpandableResourcesPipe', () => {
  it('create an instance', () => {
    const pipe = new ExpandableResourcesPipe();
    expect(pipe).toBeTruthy();
  });
});

@Pipe({ name: 'expandableResources' })
export class ExpandableResourcesPipeStub implements Partial<ExpandableResourcesPipe> {
  public transform = jest.fn(() => []);
}
