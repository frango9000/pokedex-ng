import { Component, Input } from '@angular/core';
import { ApiNamedPokemon } from '../../../../shared/domain/pokemon';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
})
export class PokemonGridComponent {
  @Input() public pokemonList: ApiNamedPokemon[];
}
