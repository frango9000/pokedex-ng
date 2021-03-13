import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MoveLearnMethodEnum as MLM, Pokemon, PokemonMoves } from '@pokedex-ng/domain';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { VersionGroupService } from '../../../../shared/services/game/version-group.service';
import { MoveLearnMethodService } from '../../../../shared/services/move/move-learn-method.service';
import { MoveService } from '../../../../shared/services/move/move.service';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss'],
})
export class PokemonMovesComponent implements OnDestroy, OnInit {
  @Input() public pokemon$: Observable<Pokemon>;

  private versionFilteredMoves$: BehaviorSubject<PokemonMoves[]> = new BehaviorSubject<PokemonMoves[]>([]);

  private subscriptions: Subscription = new Subscription();

  constructor(
    private gameVersionService: VersionGroupService,
    private moveService: MoveService,
    public moveLearnMethodService: MoveLearnMethodService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(this._filterChangesSubscription());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getLevelMoves$(): Observable<PokemonMoves[]> {
    return this.versionFilteredMoves$.pipe(
      map((moves) =>
        moves
          .filter(
            (move) =>
              move.version_group_detail.level_learned_at > 0 &&
              move.version_group_detail.move_learn_method.name === MLM.LEVEL_UP
          )
          .sort((a, b) => (a.version_group_detail.level_learned_at > b.version_group_detail.level_learned_at ? 1 : -1))
      )
    );
  }

  getTutorMoves$(): Observable<PokemonMoves[]> {
    return this.versionFilteredMoves$.pipe(
      map((moves) =>
        moves
          .filter((move) => move.version_group_detail.move_learn_method.name === MLM.TUTOR)
          .sort((a, b) => (a.move.name < b.move.name ? -1 : 1))
      )
    );
  }

  getMachineMoves$(): Observable<PokemonMoves[]> {
    return this.versionFilteredMoves$.pipe(
      map((moves) =>
        moves
          .filter((move) => move.version_group_detail.move_learn_method.name === MLM.MACHINE)
          .sort((a, b) => (a.move.name < b.move.name ? -1 : 1))
      )
    );
  }

  getEggMoves$(): Observable<PokemonMoves[]> {
    return this.versionFilteredMoves$.pipe(
      map((moves) =>
        moves
          .filter((move) => move.version_group_detail.move_learn_method.name === MLM.EGG)
          .sort((a, b) => (a.move.name < b.move.name ? -1 : 1))
      )
    );
  }

  getMovesByLearnMethod$(moveLearnMethod: string): Observable<PokemonMoves[]> {
    return this.versionFilteredMoves$.pipe(
      map((moves) =>
        moves
          .filter((move) => move.version_group_detail.move_learn_method.name === moveLearnMethod)
          .sort((a, b) => (a.move.name < b.move.name ? -1 : 1))
      )
    );
  }

  private _filterChangesSubscription(): Subscription {
    return combineLatest([
      this.pokemon$,
      this.gameVersionService.getActiveVersionGroup$(),
    ]).subscribe(([pokemon, version]) => this._emitFilteredMoves(pokemon, version));
  }

  private _emitFilteredMoves(pokemon: Pokemon, version: string): void {
    this.moveService.getAll().subscribe((moves) =>
      this.versionFilteredMoves$.next(
        pokemon.moves
          .filter((filteredMove) =>
            filteredMove.version_group_details.some((detail) => detail.version_group.name === version)
          )
          .map((filteredMove) => ({
            ...filteredMove,
            type: moves.find((move) => move.name === filteredMove.move.name)?.type,
            version_group_detail: filteredMove.version_group_details.find(
              (value) => value.version_group.name === version
            ),
          }))
      )
    );
  }
}
