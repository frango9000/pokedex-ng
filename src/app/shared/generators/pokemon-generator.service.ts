import {Injectable} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
// import {saveAs} from 'file-saver/dist/FileSaver';
import {ApiNamedPokemon} from '../domain/pokemon';
import {PokemonMoveService} from '../services/pokemon-move.service';
import {ApiNamedMove} from '../domain/pokemon-move';

@Injectable({
  providedIn: 'root'
})
export class PokemonGeneratorService {

  constructor(private pokemonService: PokemonService,
              private pokemonMoveService: PokemonMoveService) {

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
      pokemonList.forEach(value => this.pokemonService.postFirebasePokemon(value).subscribe());
    }, 40000);
  }


  generateMovesList(): void {
    const moveList: ApiNamedMove[] = [];
    this.pokemonMoveService.getMoves().subscribe(list => {
      list.results.forEach((moveId, index) => {
        setTimeout(() => {
          this.pokemonMoveService.getMove(moveId.name).subscribe(move => {
            moveList.push({
              name: move.name,
              id: move.id,
              type: move.type.name
            });
          });
        }, 30);
      });
    });
    setTimeout(() => {
      moveList.sort((a, b) => a.id > b.id ? 1 : -1);
      moveList.forEach(value => this.pokemonMoveService.postFirebaseMove(value).subscribe());
    }, 30000);
  }
}
