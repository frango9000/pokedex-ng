import { Injectable } from '@angular/core';
import { AbilityService } from './shared/services/ability.service';
import { LanguageService } from './shared/services/language.service';
import { MoveService } from './shared/services/move.service';
import { TypeService } from './shared/services/type.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(
    private languageService: LanguageService,
    private typeService: TypeService,
    private moveService: MoveService,
    private abilityService: AbilityService
  ) {}

  init() {
    return new Promise<void>((resolve) => {
      this.languageService.parseTranslations();
      this.typeService.parseTranslations();
      this.moveService.parseTranslations();
      this.abilityService.parseTranslations();
      resolve();
    });
  }
}
