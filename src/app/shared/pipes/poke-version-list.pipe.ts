import {Pipe, PipeTransform} from '@angular/core';
import {PokemonVersionService} from '../services/pokemon-version.service';

@Pipe({
  name: 'pokeVersionList',
  pure: false
})
export class PokeVersionListPipe implements PipeTransform {

  constructor(private pokemonVersionService: PokemonVersionService) {
  }

  transform<T>(versions: T[], ...args: unknown[]): T[] {
    return this.pokemonVersionService.filterWithFallback(versions);
  }
}
