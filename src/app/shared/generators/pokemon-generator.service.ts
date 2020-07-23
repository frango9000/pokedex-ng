import {Injectable} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {saveAs} from 'file-saver/dist/FileSaver';
import {splitResourceId} from '../pipes/resource-id.pipe';

@Injectable({
  providedIn: 'root'
})
export class PokemonGeneratorService {

  constructor(private pokemonService: PokemonService) {

  }

  generatePokemonList(): void {
    const pokemonList = [];
    this.pokemonService.getPokemonList(0, 1000).subscribe(list => {
      list.results.forEach((pokemonId, index) => {
        setTimeout(() => {
          this.pokemonService.getPokemon(pokemonId.name).subscribe(pokemon => {
            pokemonList.push({
              ...pokemonId, details: {
                id: pokemon.id,
                types: pokemon.types.map(type => type.type.name),
                // height: pokemon.height,
                // weight: pokemon.weight,
              }
            });
          });
        }, 40);
      });
    });
    setTimeout(() => {
      pokemonList.sort((a, b) => splitResourceId(a.url) > splitResourceId(b.url) ? 1 : -1);
      const blob = new File([JSON.stringify(pokemonList)], 'pokemon-list.json', {type: 'application/json'});
      saveAs(blob);
    }, 60000);

  }
}
