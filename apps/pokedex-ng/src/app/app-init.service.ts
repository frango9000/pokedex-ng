import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './shared/services/game/language.service';
import { MoveLearnMethodService } from './shared/services/move/move-learn-method.service';
import { MoveService } from './shared/services/move/move.service';
import { AbilityService } from './shared/services/pokemon/ability.service';
import { StatService } from './shared/services/pokemon/stat.service';
import { TypeService } from './shared/services/pokemon/type.service';

@Injectable({ providedIn: 'root' })
export class AppInitService {
  constructor(
    private translateService: TranslateService,
    private languageService: LanguageService,
    private typeService: TypeService,
    private moveService: MoveService,
    private moveLearnMethodServiceService: MoveLearnMethodService,
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
        this.moveLearnMethodServiceService.getName();
      });
  }
}

export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => appInitService.init();
}
