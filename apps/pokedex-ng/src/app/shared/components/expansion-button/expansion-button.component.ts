import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pokedex-ng-expansion-button',
  templateUrl: './expansion-button.component.html',
  styleUrls: ['./expansion-button.component.scss'],
})
export class ExpansionButtonComponent {
  @Input() isExpanded = false;
  @Input() color = 'primary';
  @Output() action = new EventEmitter<void>();
}
