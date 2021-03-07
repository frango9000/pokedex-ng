import { Component, Input } from '@angular/core';
import { AppNavbarService } from '../../../services/app/app-navbar.service';

@Component({
  selector: 'pokedex-ng-filter-toggle',
  templateUrl: './filter-toggle.component.html',
  styleUrls: ['./filter-toggle.component.scss'],
})
export class FilterToggleComponent {
  @Input() public showLabel = true;

  constructor(public appNavbarService: AppNavbarService) {}
}
