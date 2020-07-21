import {Pipe, PipeTransform} from '@angular/core';
import {PokemonVersionService} from '../services/pokemon-version.service';

@Pipe({
  name: 'pokeVersion',
  pure: false
})
export class PokeVersionPipe implements PipeTransform {

  constructor(private pokemonVersionService: PokemonVersionService) {
  }

  transform<T>(versions: T[], ...args: unknown[]): T[] {
    return this.pokemonVersionService.filterWithFallback(versions);
  }
}
