import { Component, Input } from '@angular/core';
import { PxPokemon } from '@pokedex-ng/domain';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
})
export class PokemonGridComponent {
  @Input() public pokemonList: PxPokemon[];
}
