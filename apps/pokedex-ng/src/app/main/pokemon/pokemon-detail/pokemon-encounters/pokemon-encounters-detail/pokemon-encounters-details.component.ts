import { Component, Input } from '@angular/core';
import { PokemonEncounterVersionDetail } from '@pokedex-ng/domain';

@Component({
  selector: 'pokedex-ng-pokemon-encounters-details',
  templateUrl: './pokemon-encounters-details.component.html',
  styleUrls: ['./pokemon-encounters-details.component.scss'],
})
export class PokemonEncountersDetailsComponent {
  @Input() public encounterDetails: PokemonEncounterVersionDetail;
}
