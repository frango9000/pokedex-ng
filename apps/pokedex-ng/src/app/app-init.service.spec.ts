import { TestBed } from '@angular/core/testing';

import { AppInitService } from './app-init.service';
import {
  stubAbilityServiceProvider,
  stubLanguageServiceProvider,
  stubMoveServiceProvider,
  stubTypeServiceProvider,
} from './shared/services/stubs';

describe('AppInitService', () => {
  let service: AppInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        stubLanguageServiceProvider,
        stubTypeServiceProvider,
        stubMoveServiceProvider,
        stubAbilityServiceProvider,
      ],
    });
    service = TestBed.inject(AppInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
