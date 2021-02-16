import { Component, Input } from '@angular/core';
import { PokemonAbilities } from '@pokedex-ng/domain';

@Component({
  selector: 'app-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss'],
})
export class PokemonAbilitiesComponent {
  @Input() pokemonAbilities: PokemonAbilities[];
}
