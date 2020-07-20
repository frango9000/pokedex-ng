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

  transform<T>(languages: T[], ...args: unknown[]): T[] {
    let requested = languages.filter((value: any) => value.language.name === this.pokemonLanguageService.displayLanguage);
    if (requested.length === 0) {
      requested = languages.filter((value: any) => value.language.name === PokeTranslatePipe.DEFAULT_LANGUAGE);
    }
    return requested.length > 0 ? requested : languages;
  }
}
