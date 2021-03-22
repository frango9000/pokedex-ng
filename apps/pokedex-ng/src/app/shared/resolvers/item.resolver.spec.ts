import { TestBed } from '@angular/core/testing';

import { ItemResolver } from './item.resolver';
import { RouterTestingModule } from '@angular/router/testing';
import { stubItemServiceProvider } from '../services/stubs';

describe('ItemResolver', () => {
  let resolver: ItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [stubItemServiceProvider],
    });
    resolver = TestBed.inject(ItemResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
