import {Component, OnInit} from '@angular/core';
import {PokemonGeneratorService} from '../../shared/generators/pokemon-generator.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private pokemonListGeneratorService: PokemonGeneratorService) {
  }

  ngOnInit(): void {
  }

  genPokeList(): void {
    this.pokemonListGeneratorService.generatePokemonList();
  }

  genMoveList(): void {
    this.pokemonListGeneratorService.generateMovesList();
  }
}
