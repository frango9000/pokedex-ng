import { Component, Input } from '@angular/core';
import { Pokemon, PokemonStats } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss'],
})
export class PokemonStatsComponent {
  @Input() pokemonStats: PokemonStats[];
  @Input() public pokemon: Observable<Pokemon>;
}
