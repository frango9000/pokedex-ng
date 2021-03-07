import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './shared/services/game/language.service';
import { AbilityService } from './shared/services/pokemon/ability.service';
import { MoveService } from './shared/services/pokemon/move.service';
import { StatService } from './shared/services/pokemon/stat.service';
import { TypeService } from './shared/services/pokemon/type.service';

@Injectable({ providedIn: 'root' })
export class AppInitService {
  constructor(
    private translateService: TranslateService,
    private languageService: LanguageService,
    private typeService: TypeService,
    private moveService: MoveService,
    private abilityService: AbilityService,
    private statService: StatService
  ) {}

  init() {
    this.translateService.setDefaultLang('en');
    return this.translateService
      .use('en')
      .toPromise()
      .then(() => {
        this.languageService.getName();
        this.moveService.getName();
        this.abilityService.getName();
        this.typeService.getName();
        this.statService.getName();
      });
  }
}

export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => appInitService.init();
}
