import { Component, Input } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { PxPokemon } from '@pokedex-ng/domain';

@UntilDestroy()
@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
})
export class PokemonGridComponent {
  @Input() public pokemonList: PxPokemon[];
}
