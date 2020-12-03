import { Component, Input, OnInit } from '@angular/core';
import { PokemonAbilities } from '../../../../shared/domain/pokemon';

@Component({
  selector: 'app-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss'],
})
export class PokemonAbilitiesComponent implements OnInit {
  @Input() pokemonAbilities: PokemonAbilities[];

  constructor() {}

  ngOnInit(): void {}
}
