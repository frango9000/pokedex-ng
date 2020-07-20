import {Pipe, PipeTransform} from '@angular/core';
import {PokemonLanguageService} from '../services/pokemon-language.service';

@Pipe({
  name: 'pokeTranslate',
  pure: false
})
export class PokeTranslatePipe implements PipeTransform {
  public static readonly DEFAULT_LANGUAGE: 'en';

  constructor(private pokemonLanguageService: PokemonLanguageService) {
  }

  transform<T>(i18nList: T[], ...args: unknown[]): T {
    const index = i18nList.findIndex(value => value.language.name === this.pokemonLanguageService.displayLanguage);
    if (index > -1) {
      return i18nList[index];
    } else {
      return i18nList.find(value => value.language.name === PokeTranslatePipe.DEFAULT_LANGUAGE);
    }
  }

}
