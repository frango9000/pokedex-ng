import { Component, Input } from '@angular/core';
import { PxEncountersByVersion } from '@pokedex-ng/domain';

@Component({
  selector: 'pokedex-ng-pokemon-encounters-version',
  templateUrl: './pokemon-encounters-version.component.html',
  styleUrls: ['./pokemon-encounters-version.component.scss'],
})
export class PokemonEncountersVersionComponent {
  @Input() public versionLocationEncounters: PxEncountersByVersion;
  public isExpanded = false;
}
