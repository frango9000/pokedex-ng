import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'pokedex-ng-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  constructor(private filterService: FilterService) {}

  onQueryInput(query: HTMLInputElement) {
    this.filterService.emitQuery(query.value);
  }
}
