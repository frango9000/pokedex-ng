import {Injectable} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
// import {saveAs} from 'file-saver/dist/FileSaver';
import {ApiNamedPokemon} from '../domain/pokemon';
import {PokemonMoveService} from '../services/pokemon-move.service';
import {ApiNamedMove} from '../domain/pokemon-move';
import {PokemonLanguageService} from '../services/pokemon-language.service';
import {ApiNamedLanguage} from '../domain/pokemon-language';

@Injectable({
  providedIn: 'root'
})
export class PokemonGeneratorService {

  constructor(private pokemonService: PokemonService,
              private pokemonMoveService: PokemonMoveService,
              private languageService: PokemonLanguageService) {

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
    const moves: ApiNamedMove[] = [];
    this.pokemonMoveService.getApiMoves().subscribe(responseList => {
      responseList.forEach(moveName => {
        setTimeout(() => {
          this.pokemonMoveService.getApiMove(moveName.name).subscribe(move => {
            moves.push({
              name: move.name,
              id: move.id,
              type: move.type.name,
              // names: move.names.map(value => {
              //   return { name: value.name, language: value.language.name };
              // })
            });
            if (moves.length === responseList.length) {
              moves.sort((a, b) => a.id > b.id ? 1 : -1);
              console.log('moves');
              console.log(JSON.stringify(moves));
            }
          });
        }, 50);
      });
    });
  }

  generateLanguageList(): void {
    const languages: ApiNamedLanguage[] = [];
    this.languageService.getApiLanguageList().subscribe(responseList => {
      responseList.forEach(languageName => {
        setTimeout(() => {
          this.languageService.getApiLanguage(languageName.name).subscribe(language => {
            languages.push({
              name: language.name,
              id: language.id,
              iso3166: language.iso3166
            });
            if (languages.length === responseList.length) {
              languages.sort((a, b) => a.id > b.id ? 1 : -1);
              console.log('languages', languages);
            }
          });
        }, 100);
      });
    });
  }
}
