import { Component, Input } from '@angular/core';
import { FilterToolbarComponent } from './filter-toolbar.component';

@Component({ selector: 'pokedex-ng-filter-toolbar', template: '' })
export class StubFilterToolbarComponent implements Partial<FilterToolbarComponent> {
  @Input() public showTypeFilter = false;
  @Input() public showTypesFilter = false;
  @Input() public showGenerationFilter = false;
  @Input() public showClearFilter = true;
}
