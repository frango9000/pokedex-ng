import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { VersionGroupService } from '../../../services/game/version-group.service';

@Component({
  selector: 'pokedex-ng-version-group-picker',
  templateUrl: './version-group-picker.component.html',
  styleUrls: ['./version-group-picker.component.scss'],
})
export class VersionGroupPickerComponent {
  baseUrl = environment.baseHref;
  @Input() public showLabel = true;

  constructor(public gameVersionService: VersionGroupService) {}
}
