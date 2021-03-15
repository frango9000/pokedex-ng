import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PokemonMoves } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-moves-card',
  templateUrl: './pokemon-moves-card.component.html',
  styleUrls: ['./pokemon-moves-card.component.scss'],
})
export class PokemonMovesCardComponent implements OnInit, OnDestroy {
  @Input() sourceMoves$: Observable<PokemonMoves[]>;
  @Input() cardTitle = '';
  @Input() showLevels = false;

  public expandedMove = '';

  public moves$ = new BehaviorSubject<PokemonMoves[]>([]);
  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.sourceMoves$
        .pipe(
          tap((value) => {
            if (this.cardTitle === 'level-up') {
              value.sort((a, b) =>
                a.version_group_detail.level_learned_at > b.version_group_detail.level_learned_at ? 1 : -1
              );
            }
          })
        )
        .subscribe((moves) => this.moves$.next(moves))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
