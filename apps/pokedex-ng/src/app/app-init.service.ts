import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { PokemonLanguageService } from './shared/services/pokemon-language.service';
import { PokemonTypeService } from './shared/services/pokemon-type.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(private languageService: PokemonLanguageService, private typeService: PokemonTypeService) {}

  init() {
    return new Promise<void>((resolve) => {
      environment.logDebug ? console.log('Pokedex Init') : undefined;
      this.languageService.parseTranslations();
      this.typeService.parseTranslations();
      resolve();
    });
  }
}
