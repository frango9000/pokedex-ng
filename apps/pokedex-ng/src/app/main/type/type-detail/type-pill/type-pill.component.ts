import { Component, Input } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { MDBModalService } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { TypeDamagesComponent } from '../type-damages/type-damages.component';

@UntilDestroy()
@Component({
  selector: 'pokedex-ng-type-pill',
  templateUrl: './type-pill.component.html',
  styleUrls: ['./type-pill.component.scss'],
})
export class TypePillComponent {
  @Input() public type: string;
  @Input() public size = 16;
  @Input() public vertical = false;
  @Input() public inline = true;
  @Input() public clickable = true;
  @Input() public showDefending = true;
  @Input() public showAttacking = true;

  constructor(private readonly modalService: MDBModalService) {}

  public onClick() {
    if (this.clickable) {
      this.modalService.show(TypeDamagesComponent, {
        class: 'modal-dialog-centered',
        data: {
          showDefending: this.showDefending,
          showAttacking: this.showAttacking,
          types$: of([this.type]),
        },
      });
    }
  }
}
