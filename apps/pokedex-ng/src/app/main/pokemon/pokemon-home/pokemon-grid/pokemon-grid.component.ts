import { Component, Input, OnInit } from '@angular/core';
import { ApiNamedPokemon } from '../../../../shared/domain/pokemon';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
})
export class PokemonGridComponent implements OnInit {
  @Input() public pokemonList: ApiNamedPokemon[];

  constructor() {}

  ngOnInit(): void {}
}
