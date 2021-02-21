import { Component, Input } from '@angular/core';
import { Species } from '@pokedex-ng/domain';

@Component({
  selector: 'app-pokemon-species-info',
  templateUrl: './pokemon-species-info.component.html',
  styleUrls: ['./pokemon-species-info.component.scss'],
})
export class PokemonSpeciesInfoComponent {
  @Input() public pokemonSpecies: Species;
}
