import { Component, Input } from '@angular/core';
import { TypesFilterComponent } from './types-filter.component';

@Component({ selector: 'pokedex-ng-types-filter', template: '' })
export class StubTypesFilterComponent implements Partial<TypesFilterComponent> {
  @Input() public showTypesExclusivenessToggle = false;
}
