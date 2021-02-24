import { Component, Input, OnInit } from '@angular/core';
import { Move } from '@pokedex-ng/domain';
import { MoveService } from '../../../../../shared/services/move.service';

@Component({
  selector: 'app-pokemon-move',
  templateUrl: './pokemon-move.component.html',
  styleUrls: ['./pokemon-move.component.scss'],
})
export class PokemonMoveComponent implements OnInit {
  @Input() moveId: string | number;

  public move: Move;

  constructor(private pokemonMoveService: MoveService) {}

  ngOnInit(): void {
    this.pokemonMoveService.fetchApiOneMove(this.moveId).subscribe((move) => (this.move = move));
  }
}
