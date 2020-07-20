import {Pipe, PipeTransform} from '@angular/core';
import {PokemonVersionService} from '../services/pokemon-version.service';

@Pipe({
  name: 'pokeVersion',
  pure: false
})
export class PokeVersionPipe implements PipeTransform {
  public static readonly DEFAULT_VERSION: 'yellow';

  constructor(private pokemonVersionService: PokemonVersionService) {
  }

  transform<T>(versions: T[], ...args: unknown[]): T[] {
    let requested = versions.filter((value: any) => value.version_group.name === this.pokemonVersionService.displayVersion);
    if (requested.length === 0) {
      requested = versions.filter((value: any) => value.version_group.name === PokeVersionPipe.DEFAULT_VERSION);
    }
    return requested.length > 0 ? requested : versions;
  }
}
