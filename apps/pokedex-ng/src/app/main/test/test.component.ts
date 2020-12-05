import { Component } from '@angular/core';
import { PokemonGeneratorService } from '../../shared/generators/pokemon-generator.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  constructor(private pokemonListGeneratorService: PokemonGeneratorService) {}

  genPokeList(): void {
    this.pokemonListGeneratorService.generatePokemonList();
  }

  generateMoveList(): void {
    this.pokemonListGeneratorService.generateMovesList();
  }

  generateLangList(): void {
    this.pokemonListGeneratorService.generateLanguageList();
  }

  generateTypeList(): void {
    this.pokemonListGeneratorService.generateTypeList();
  }

  generateVersionList(): void {
    this.pokemonListGeneratorService.generateVersionList();
  }
}
