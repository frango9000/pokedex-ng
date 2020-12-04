import { Component, Input } from '@angular/core';
import { PokemonAbilities } from '../../../../shared/domain/pokemon';

@Component({
  selector: 'app-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss'],
})
export class PokemonAbilitiesComponent {
  @Input() pokemonAbilities: PokemonAbilities[];
}
