import { Component } from '@angular/core';
import { GameVersionService } from '../../../services/game-version.service';

@Component({
  selector: 'pokedex-ng-version-group-filter',
  templateUrl: './version-group-filter.component.html',
  styleUrls: ['./version-group-filter.component.scss'],
})
export class VersionGroupFilterComponent {
  constructor(public gameVersionService: GameVersionService) {}
}
