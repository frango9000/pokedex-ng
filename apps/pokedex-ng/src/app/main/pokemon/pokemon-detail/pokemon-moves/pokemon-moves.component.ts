import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MoveLearnMethod as MLM, Pokemon, PokemonMoves } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, mergeMap, skip, take } from 'rxjs/operators';
import { GameVersionService } from '../../../../shared/services/game/game-version.service';
import { MoveService } from '../../../../shared/services/pokemon/move.service';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss'],
})
export class PokemonMovesComponent implements OnDestroy, OnInit {
  @Input() public pokemon$: Observable<Pokemon>;

  private versionFilteredMoves$: BehaviorSubject<PokemonMoves[]> = new BehaviorSubject<PokemonMoves[]>([]);

  private subscriptions: Subscription = new Subscription();

  constructor(private gameVersionService: GameVersionService, private moveService: MoveService) {}

  ngOnInit(): void {
    this.subscriptions.add(this._pokemonUpdateSubscription());
    this.subscriptions.add(this._versionUpdatesSubscription());
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
              move.version_group_detail.move_learn_method.name === MLM.LEVEL_UP_METHOD
          )
          .sort((a, b) => (a.version_group_detail.level_learned_at > b.version_group_detail.level_learned_at ? 1 : -1))
      )
    );
  }

  getTutorMoves$(): Observable<PokemonMoves[]> {
    return this.versionFilteredMoves$.pipe(
      map((moves) =>
        moves
          .filter((move) => move.version_group_detail.move_learn_method.name === MLM.TUTOR_METHOD)
          .sort((a, b) => (a.move.name < b.move.name ? -1 : 1))
      )
    );
  }

  getMachineMoves$(): Observable<PokemonMoves[]> {
    return this.versionFilteredMoves$.pipe(
      map((moves) =>
        moves
          .filter((move) => move.version_group_detail.move_learn_method.name === MLM.MACHINE_METHOD)
          .sort((a, b) => (a.move.name < b.move.name ? -1 : 1))
      )
    );
  }

  getEggMoves$(): Observable<PokemonMoves[]> {
    return this.versionFilteredMoves$.pipe(
      map((moves) =>
        moves
          .filter((move) => move.version_group_detail.move_learn_method.name === MLM.EGG_METHOD)
          .sort((a, b) => (a.move.name < b.move.name ? -1 : 1))
      )
    );
  }

  private _versionUpdatesSubscription(): Subscription {
    return this.gameVersionService
      .getActiveVersion$()
      .pipe(
        skip(1),
        mergeMap((version) =>
          this.pokemon$.pipe(
            take(1),
            map((pokemon) => ({ version, pokemon }))
          )
        )
      )
      .subscribe((pair) => {
        this._emitFilteredMoves(pair.pokemon, pair.version);
      });
  }

  private _pokemonUpdateSubscription(): Subscription {
    return this.pokemon$
      .pipe(
        mergeMap((pokemon) =>
          this.gameVersionService.getActiveVersion$().pipe(
            take(1),
            map((version) => ({ pokemon, version }))
          )
        )
      )
      .subscribe((pair) => this._emitFilteredMoves(pair.pokemon, pair.version));
  }

  private _emitFilteredMoves(pokemon: Pokemon, version: string): void {
    this.moveService.getAllMoves().subscribe((moves) =>
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
