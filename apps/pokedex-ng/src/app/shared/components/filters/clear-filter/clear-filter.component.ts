import { Component } from '@angular/core';
import { FilterService } from '../../../services/app/filter.service';

@Component({
  selector: 'pokedex-ng-clear-filter',
  templateUrl: './clear-filter.component.html',
  styleUrls: ['./clear-filter.component.scss'],
})
export class ClearFilterComponent {
  constructor(public filterService: FilterService) {}
}
