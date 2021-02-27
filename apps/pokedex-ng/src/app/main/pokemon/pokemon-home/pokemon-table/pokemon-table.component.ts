import { Component, Input } from '@angular/core';
import { PxPokemon } from '@pokedex-ng/domain';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss'],
})
export class PokemonTableComponent {
  @Input() public pokemonList: PxPokemon[];
}
