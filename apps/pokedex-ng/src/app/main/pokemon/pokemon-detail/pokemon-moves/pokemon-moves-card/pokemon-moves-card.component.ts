import {Component, Input, OnInit} from '@angular/core';
import {PokemonMoves} from '../../../../../shared/domain/pokemon';
import {ApiNamedMove} from '../../../../../shared/domain/pokemon-move';

@Component({
  selector: 'app-pokemon-moves-card',
  templateUrl: './pokemon-moves-card.component.html',
  styleUrls: ['./pokemon-moves-card.component.scss']
})
export class PokemonMovesCardComponent implements OnInit {

  @Input() moves: PokemonMoves[] = [];
  @Input() cardTitle: string = '';
  @Input() showLevels: boolean = false;

  @Input() moveTypes: ApiNamedMove[];

  constructor() {
  }

  ngOnInit(): void {
  }

  getType(move: string): string {
    const type = this.moveTypes.findIndex(value => value.name === move);
    return type === -1 ? '!NOT FOUND!' : this.moveTypes[type].type;
  }

}
