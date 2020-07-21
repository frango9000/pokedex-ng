import {Component, Input, OnInit} from '@angular/core';
import {PokemonMoves} from '../../../../../shared/domain/pokemon';

@Component({
  selector: 'app-pokemon-moves-card',
  templateUrl: './pokemon-moves-card.component.html',
  styleUrls: ['./pokemon-moves-card.component.scss']
})
export class PokemonMovesCardComponent implements OnInit {

  @Input() moves: PokemonMoves[] = [];
  @Input() cardTitle: string = '';
  @Input() showLevels: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
