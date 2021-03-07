import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AppInitService } from './app-init.service';
import {
  stubAbilityServiceProvider,
  stubLanguageServiceProvider,
  stubMoveServiceProvider,
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
      ],
    });
    service = TestBed.inject(AppInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
