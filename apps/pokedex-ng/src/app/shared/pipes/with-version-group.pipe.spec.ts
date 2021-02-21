import { WithVersionGroupPipe } from './with-version-group.pipe';

describe('WithVersionGroupPipe', () => {
  it('create an instance', () => {
    const pipe = new WithVersionGroupPipe(null, null);
    expect(pipe).toBeTruthy();
  });
});
