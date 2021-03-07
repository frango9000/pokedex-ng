import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokedex-ng-filter-toolbar',
  templateUrl: './filter-toolbar.component.html',
  styleUrls: ['./filter-toolbar.component.scss'],
})
export class FilterToolbarComponent {
  @Input() public showTypeFilter = false;
  @Input() public showTypesFilter = false;
  @Input() public showGenerationFilter = false;
  @Input() public showClearFilter = true;
}
