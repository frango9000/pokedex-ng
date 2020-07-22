import {Component, Input, OnInit} from '@angular/core';
import {ApiNamedResource} from '../../../../shared/domain/api-resource';

@Component({
  selector: 'app-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss']
})
export class PokemonAbilitiesComponent implements OnInit {

  @Input() pokemonAbilities: {
    is_hidden: boolean,
    slot: number,
    ability: ApiNamedResource
  }[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
