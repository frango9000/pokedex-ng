import { Component, Input } from '@angular/core';
import { MoveDetailComponent } from './move-detail.component';

@Component({ selector: 'pokedex-ng-move-detail', template: '' })
export class StubMoveDetailComponent implements Partial<MoveDetailComponent> {
  @Input() moveId: string | number;
}
