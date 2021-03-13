import { Component, Input, OnInit } from '@angular/core';
import { Move } from '@pokedex-ng/domain';
import { combineLatest } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { MoveAilmentService } from '../../../shared/services/move/move-ailment.service';
import { MoveCategoryService } from '../../../shared/services/move/move-category.service';
import { MoveDamageClassService } from '../../../shared/services/move/move-damage-class.service';
import { MoveTargetService } from '../../../shared/services/move/move-target.service';
import { MoveService } from '../../../shared/services/move/move.service';

@Component({
  selector: 'pokedex-ng-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss'],
})
export class MoveDetailComponent implements OnInit {
  @Input() moveId: string | number;

  public move: Move;

  constructor(
    private pokemonMoveService: MoveService,
    private moveAilmentService: MoveAilmentService,
    private moveCategoryService: MoveCategoryService,
    private moveDamageClassService: MoveDamageClassService,
    private moveTargetService: MoveTargetService
  ) {}

  ngOnInit(): void {
    this.pokemonMoveService
      .fetchApiOne(this.moveId)
      .pipe(
        mergeMap((move: Move) =>
          combineLatest([
            this.moveAilmentService.fetchApiOne(move.meta.ailment.name),
            this.moveCategoryService.fetchApiOne(move.meta.category.name),
            this.moveDamageClassService.fetchApiOne(move.damage_class.name),
            this.moveTargetService.fetchApiOne(move.target.name),
          ]).pipe(map(() => move))
        )
      )
      .subscribe((move) => (this.move = move));
  }
}
