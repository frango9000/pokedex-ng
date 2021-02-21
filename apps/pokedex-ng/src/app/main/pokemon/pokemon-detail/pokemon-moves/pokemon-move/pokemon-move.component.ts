import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Move } from '@pokedex-ng/domain';
import { Subscription } from 'rxjs';
import { GameVersionService } from '../../../../../shared/services/game-version.service';
import { MoveService } from '../../../../../shared/services/move.service';

@Component({
  selector: 'app-pokemon-move',
  templateUrl: './pokemon-move.component.html',
  styleUrls: ['./pokemon-move.component.scss'],
})
export class PokemonMoveComponent implements OnInit, OnDestroy {
  @Input() moveId: string | number;

  move: Move;

  activeVersion = 'en';
  private versionSub: Subscription;

  constructor(private pokemonMoveService: MoveService, private pokemonVersionService: GameVersionService) {}

  ngOnInit(): void {
    this.versionSub = this.pokemonVersionService.activeVersion$.subscribe((value) => (this.activeVersion = value));
    this.pokemonMoveService.fetchApiOneMove(this.moveId).subscribe((move) => {
      this.move = move;
    });
  }

  ngOnDestroy(): void {
    this.versionSub?.unsubscribe();
  }
}
