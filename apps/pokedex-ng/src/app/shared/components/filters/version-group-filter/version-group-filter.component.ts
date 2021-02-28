import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { VersionGroupService } from '../../../services/game/version-group.service';

@Component({
  selector: 'pokedex-ng-version-group-filter',
  templateUrl: './version-group-filter.component.html',
  styleUrls: ['./version-group-filter.component.scss'],
})
export class VersionGroupFilterComponent {
  baseUrl = environment.baseHref;

  constructor(public gameVersionService: VersionGroupService) {}
}
