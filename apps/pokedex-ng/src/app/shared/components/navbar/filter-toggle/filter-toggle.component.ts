import { Component } from '@angular/core';
import { AppNavbarService } from '../../../services/app/app-navbar.service';

@Component({
  selector: 'pokedex-ng-filter-toggle',
  templateUrl: './filter-toggle.component.html',
  styleUrls: ['./filter-toggle.component.scss'],
})
export class FilterToggleComponent {
  constructor(public appNavbarService: AppNavbarService) {}
}
