import {Component, Input, OnInit} from '@angular/core';
import {NamedResource} from '../../../../shared/domain/named-resource';

@Component({
  selector: 'app-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss']
})
export class PokemonAbilitiesComponent implements OnInit {

  @Input() pokemonAbilities: {
    is_hidden: boolean,
    slot: number,
    ability: NamedResource
  }[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
