import { Component } from '@angular/core';
import { AppNavbarService } from '../../services/app-navbar.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'pokedex-ng-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  constructor(public filterService: FilterService, public appNavbarService: AppNavbarService) {}
}
