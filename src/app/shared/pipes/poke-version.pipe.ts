import {Pipe, PipeTransform} from '@angular/core';
import {PokemonVersionService} from '../services/pokemon-version.service';

@Pipe({
  name: 'pokeVersion',
  pure: false
})
export class PokeVersionPipe implements PipeTransform {

  constructor(private pokemonVersionService: PokemonVersionService) {
  }

  transform(value: string, ...args: unknown[]): string {
    console.log('pv-piping' + value);
    return value + this.pokemonVersionService.activeVersion;
  }

}
