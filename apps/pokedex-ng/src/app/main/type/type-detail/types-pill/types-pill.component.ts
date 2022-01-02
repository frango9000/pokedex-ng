import { Component, Input } from '@angular/core';
import { MDBModalService } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { TypeDamagesComponent } from '../type-damages/type-damages.component';

@Component({
  selector: 'pokedex-ng-types-pill',
  templateUrl: './types-pill.component.html',
  styleUrls: ['./types-pill.component.scss'],
})
export class TypesPillComponent {
  @Input() public types: string[] = [];
  @Input() public size = 16;
  @Input() public vertical = false;
  @Input() public inline = true;
  @Input() public clickable = true;
  @Input() public hideFirstType = false;
  @Input() public hideSecondType = false;

  constructor(private readonly modalService: MDBModalService) {}

  onClick() {
    if (this.clickable) {
      this.modalService.show(TypeDamagesComponent, {
        class: 'modal-dialog-centered',
        data: {
          showDefending: true,
          showAttacking: false,
          types$: of([...this.types]),
        },
      });
    }
  }
}
