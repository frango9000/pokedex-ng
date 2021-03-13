import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AppInitService } from './app-init.service';
import { stubMoveLearnMethodServiceProvider, stubMoveServiceProvider } from './shared/services/move/move.service.stubs';
import {
  stubAbilityServiceProvider,
  stubLanguageServiceProvider,
  stubStatServiceProvider,
  stubTypeServiceProvider,
} from './shared/services/stubs';

describe('AppInitService', () => {
  let service: AppInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        stubLanguageServiceProvider,
        stubTypeServiceProvider,
        stubMoveServiceProvider,
        stubAbilityServiceProvider,
        stubStatServiceProvider,
        stubMoveLearnMethodServiceProvider,
      ],
    });
    service = TestBed.inject(AppInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
