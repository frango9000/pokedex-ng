import { Component, Input } from '@angular/core';
import { ApiNamedPokemon } from '../../../../shared/domain/pokemon';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss'],
})
export class PokemonTableComponent {
  @Input() public pokemonList: ApiNamedPokemon[];
}
