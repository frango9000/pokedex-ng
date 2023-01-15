import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Move } from '@pokedex-ng/domain';
import { forkJoin, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MoveAilmentService } from '../../../shared/services/move/move-ailment.service';
import { MoveCategoryService } from '../../../shared/services/move/move-category.service';
import { MoveTargetService } from '../../../shared/services/move/move-target.service';
import { MoveService } from '../../../shared/services/move/move.service';

@Component({
  selector: 'pokedex-ng-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss'],
})
export class MoveDetailComponent implements OnInit, OnDestroy {
  @Input() moveId: string | number;

  public move: Move;

  private subscriptions = new Subscription();

  constructor(
    private pokemonMoveService: MoveService,
    private moveAilmentService: MoveAilmentService,
    private moveCategoryService: MoveCategoryService,
    private moveTargetService: MoveTargetService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(this._subscribeToFetchTranslations());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private _subscribeToFetchTranslations() {
    return this.pokemonMoveService
      .fetchApiOne(this.moveId)
      .pipe(
        switchMap((move: Move) =>
          forkJoin([
            ...(move.meta
              ? [
                  this.moveAilmentService.fetchApiOne(move.meta.ailment.name),
                  this.moveCategoryService.fetchApiOne(move.meta.category.name),
                ]
              : []),
            this.moveTargetService.fetchApiOne(move.target.name),
          ]).pipe(map(() => move))
        )
      )
      .subscribe((move) => (this.move = move));
  }
}
