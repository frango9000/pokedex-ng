import { Component, Input } from '@angular/core';
import { PokemonMoves } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-moves-card',
  templateUrl: './pokemon-moves-card.component.html',
  styleUrls: ['./pokemon-moves-card.component.scss'],
})
export class PokemonMovesCardComponent {
  @Input() moves$: Observable<PokemonMoves[]>;
  @Input() cardTitle = '';
  @Input() showLevels = false;

  public expandedMove = '';
}
