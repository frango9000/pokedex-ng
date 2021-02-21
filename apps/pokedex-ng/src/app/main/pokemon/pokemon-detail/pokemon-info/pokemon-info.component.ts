import { Component, Input } from '@angular/core';
import { Pokemon } from '@pokedex-ng/domain';

@Component({
  selector: 'pokedex-ng-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent {
  @Input() public pokemon: Pokemon;
}
