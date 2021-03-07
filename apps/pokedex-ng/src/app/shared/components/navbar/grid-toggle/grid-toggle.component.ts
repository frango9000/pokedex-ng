import { Component } from '@angular/core';
import { AppNavbarService } from '../../../services/app/app-navbar.service';

@Component({
  selector: 'pokedex-ng-grid-toggle',
  templateUrl: './grid-toggle.component.html',
  styleUrls: ['./grid-toggle.component.scss'],
})
export class GridToggleComponent {
  constructor(public appNavbarService: AppNavbarService) {}
}
