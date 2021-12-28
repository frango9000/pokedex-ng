import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ExpansionButtonComponent } from './expansion-button.component';

@Component({ selector: 'pokedex-ng-expansion-button', template: '' })
export class StubExpansionButtonComponent implements Partial<ExpansionButtonComponent> {
  @Input() isExpanded = false;
  @Input() color = 'primary';
  @Output() action = new EventEmitter<void>();
}
