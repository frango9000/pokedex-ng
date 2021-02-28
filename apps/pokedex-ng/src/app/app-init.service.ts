import { Injectable } from '@angular/core';
import { LanguageService } from './shared/services/game/language.service';
import { AbilityService } from './shared/services/pokemon/ability.service';
import { MoveService } from './shared/services/pokemon/move.service';
import { StatService } from './shared/services/pokemon/stat.service';
import { TypeService } from './shared/services/pokemon/type.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(
    private languageService: LanguageService,
    private typeService: TypeService,
    private moveService: MoveService,
    private abilityService: AbilityService,
    private statService: StatService
  ) {}

  init() {
    return new Promise<void>((resolve) => {
      this.languageService.getAll().subscribe();
      this.moveService.getAll().subscribe();
      this.abilityService.getAll().subscribe();
      this.typeService.getAll().subscribe();
      this.statService.getAll().subscribe();
      resolve();
    });
  }
}
