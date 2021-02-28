import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ExpandableResource, PokemonMoves } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-moves-card',
  templateUrl: './pokemon-moves-card.component.html',
  styleUrls: ['./pokemon-moves-card.component.scss'],
})
export class PokemonMovesCardComponent implements OnInit, OnDestroy {
  @Input() moves$: Observable<PokemonMoves[]>;
  @Input() cardTitle = '';
  @Input() showLevels = false;

  public expandableMoves$ = new BehaviorSubject<ExpandableResource<PokemonMoves>[]>([]);
  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.moves$.subscribe((moves) =>
        this.expandableMoves$.next(
          moves.map((move) => ({
            resource: move,
            expanded: false,
          }))
        )
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
