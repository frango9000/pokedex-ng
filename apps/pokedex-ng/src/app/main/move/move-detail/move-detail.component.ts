import { Component, Input, OnInit } from '@angular/core';
import { Move } from '@pokedex-ng/domain';
import { MoveService } from '../../../shared/services/pokemon/move.service';

@Component({
  selector: 'pokedex-ng-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss'],
})
export class MoveDetailComponent implements OnInit {
  @Input() moveId: string | number;

  public move: Move;

  constructor(private pokemonMoveService: MoveService) {}

  ngOnInit(): void {
    this.pokemonMoveService.fetchApiOne(this.moveId).subscribe((move) => (this.move = move));
  }
}
