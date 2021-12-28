import { Component, Input } from '@angular/core';
import { PxLocationAreaEncounter } from '@pokedex-ng/domain';

@Component({
  selector: 'pokedex-ng-pokemon-encounters-location',
  templateUrl: './pokemon-encounters-location.component.html',
  styleUrls: ['./pokemon-encounters-location.component.scss'],
})
export class PokemonEncountersLocationComponent {
  @Input() public versionLocation: PxLocationAreaEncounter;
  public isExpanded = false;
}
