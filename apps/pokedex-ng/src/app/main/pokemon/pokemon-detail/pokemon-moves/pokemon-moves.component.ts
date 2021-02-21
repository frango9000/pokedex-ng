import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { NamedApiMove, PokemonMoves } from '@pokedex-ng/domain';
import { Subscription } from 'rxjs';
import { GameVersionService } from '../../../../shared/services/game-version.service';
import { MoveService } from '../../../../shared/services/move.service';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss'],
})
export class PokemonMovesComponent implements OnDestroy, OnChanges {
  @Input() pokemonMoves: PokemonMoves[] = [];

  private versionFilteredMoves: PokemonMoves[] = [];

  public levelMoves: PokemonMoves[] = [];
  public machineMoves: PokemonMoves[] = [];
  public tutorMoves: PokemonMoves[] = [];
  public eggMoves: PokemonMoves[] = [];

  private versionSub: Subscription;

  public moveTypes: NamedApiMove[] = [];

  constructor(private pokemonVersionService: GameVersionService, private pokemonMoveService: MoveService) {}

  ngOnChanges(): void {
    this.pokemonMoveService.getAllMoves().subscribe((value) => (this.moveTypes = value));
    this.versionSub = this.pokemonVersionService.getActiveVersion$().subscribe(() => {
      this.filterMoves();
    });
  }

  ngOnDestroy(): void {
    this.versionSub?.unsubscribe();
  }

  private filterMoves(): void {
    this.versionFilteredMoves = JSON.parse(JSON.stringify(this.pokemonMoves));
    this.versionFilteredMoves.forEach(
      (move) =>
        (move.version_group_details = move.version_group_details.filter((value) => {
          return this.pokemonVersionService.matchesDisplayVersion(value.version_group.name);
        }))
    );

    this.levelMoves = this.versionFilteredMoves
      .filter(
        (move) =>
          move.version_group_details.filter(
            (detail) =>
              detail.level_learned_at &&
              detail.level_learned_at > 0 &&
              detail.move_learn_method.name === MoveLearnMethod.LEVEL_UP_METHOD
          ).length > 0
      )
      .sort((a, b) =>
        a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at ? 1 : -1
      );

    this.machineMoves = this.versionFilteredMoves
      .filter(
        (move) =>
          move.version_group_details.filter(
            (detail) => detail.move_learn_method.name === MoveLearnMethod.MACHINE_METHOD
          ).length > 0
      )
      .sort((a, b) => (a.move.name < b.move.name ? -1 : 1));

    this.tutorMoves = this.versionFilteredMoves
      .filter(
        (move) =>
          move.version_group_details.filter((detail) => detail.move_learn_method.name === MoveLearnMethod.TUTOR_METHOD)
            .length > 0
      )
      .sort((a, b) => (a.move.name < b.move.name ? -1 : 1));

    this.eggMoves = this.versionFilteredMoves
      .filter(
        (move) =>
          move.version_group_details.filter((detail) => detail.move_learn_method.name === MoveLearnMethod.EGG_METHOD)
            .length > 0
      )
      .sort((a, b) => (a.move.name < b.move.name ? -1 : 1));
  }
}

enum MoveLearnMethod {
  LEVEL_UP_METHOD = 'level-up',
  MACHINE_METHOD = 'machine',
  EGG_METHOD = 'egg',
  TUTOR_METHOD = 'tutor',
}
