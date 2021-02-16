import { Component, Input } from '@angular/core';
import { PokemonStats } from '@pokedex-ng/domain';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss'],
})
export class PokemonStatsComponent {
  @Input() pokemonStats: PokemonStats[];
}
