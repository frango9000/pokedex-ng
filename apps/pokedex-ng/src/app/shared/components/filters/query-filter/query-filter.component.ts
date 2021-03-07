import { Component } from '@angular/core';
import { FilterService } from '../../../services/app/filter.service';

@Component({
  selector: 'pokedex-ng-query-filter',
  templateUrl: './query-filter.component.html',
  styleUrls: ['./query-filter.component.scss'],
})
export class QueryFilterComponent {
  constructor(public filterService: FilterService) {}
}
