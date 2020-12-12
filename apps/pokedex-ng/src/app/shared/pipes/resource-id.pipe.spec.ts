import { Pipe, PipeTransform } from '@angular/core';
import { ResourceIdPipe } from './resource-id.pipe';

describe('ResourceIdPipe', () => {
  it('create an instance', () => {
    const pipe = new ResourceIdPipe();
    expect(pipe).toBeTruthy();
  });
});

@Pipe({ name: 'resourceId' })
export class ResourceIdStubPipe implements PipeTransform, Partial<ResourceIdPipe> {
  public transform = jest.fn();
}
