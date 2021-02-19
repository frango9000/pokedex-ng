import { Component } from '@angular/core';
import { FilterBarComponent } from './filter-bar.component';

@Component({ selector: 'pokedex-ng-filter-bar', template: '' })
export class StubFilterBarComponent implements Partial<FilterBarComponent> {
  onQueryInput = undefined;
}
