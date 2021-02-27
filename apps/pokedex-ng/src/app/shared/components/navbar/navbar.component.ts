import { Component } from '@angular/core';
import { AppNavbarService } from '../../services/app/app-navbar.service';

@Component({
  selector: 'pokedex-ng-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public appNavbarService: AppNavbarService) {}
}
