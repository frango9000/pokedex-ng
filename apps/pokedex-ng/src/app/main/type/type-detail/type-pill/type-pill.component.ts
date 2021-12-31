import { Component, Input } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MDBModalService } from 'angular-bootstrap-md';
import { of, Subject } from 'rxjs';
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
  @Input() public clickable = true;
  @Input() public showDefending = true;
  @Input() public showAttacking = true;

  private readonly click: Subject<string> = new Subject<string>();

  constructor(private readonly modalService: MDBModalService) {
    this.click.pipe(untilDestroyed(this)).subscribe(() => {
      this.modalService.show(TypeDamagesComponent, {
        class: 'modal-dialog-centered',
        data: {
          showDefending: this.showDefending,
          showAttacking: this.showAttacking,
          types$: of([this.type]),
        },
      });
    });
  }

  public onClick() {
    if (this.clickable) {
      this.click.next(this.type);
    }
  }
}
