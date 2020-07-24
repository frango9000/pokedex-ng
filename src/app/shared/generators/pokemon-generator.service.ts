import {Injectable} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
// import {saveAs} from 'file-saver/dist/FileSaver';
import {ApiNamedPokemon} from '../domain/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonGeneratorService {

  constructor(private pokemonService: PokemonService) {

  }

  generatePokemonList(): void {
    const pokemonList: ApiNamedPokemon[] = [];
    this.pokemonService.getPokemonList(0, 807).subscribe(list => {
      list.results.forEach((pokemonId, index) => {
        setTimeout(() => {
          this.pokemonService.getPokemon(pokemonId.name).subscribe(pokemon => {
            pokemonList.push({
              ...pokemonId,
              id: pokemon.id,
              types: pokemon.types.map(type => type.type.name),
              // height: pokemon.height,
              // weight: pokemon.weight,
            });
          });
        }, 20);
      });
    });
    setTimeout(() => {
      pokemonList.sort((a, b) => a.id > b.id ? 1 : -1);
      // const blob = new File([JSON.stringify(pokemonList)], 'pokemon-list.json', {type: 'application/json'});
      // saveAs(blob);
      // this.pokemonService.postPokemonList(pokemonList).subscribe();
      pokemonList.forEach(value => this.pokemonService.postPokemonList(value).subscribe());
    }, 40000);

  }
}
