import {Component, Input, OnInit} from '@angular/core';
import {PokemonSpecies} from '../../../../../shared/domain/pokemon-species';

@Component({
  selector: 'app-pokemon-species-info',
  templateUrl: './pokemon-species-info.component.html',
  styleUrls: ['./pokemon-species-info.component.scss']
})
export class PokemonSpeciesInfoComponent implements OnInit {

  @Input() public pokemonSpecies: PokemonSpecies;

  constructor() {
  }

  ngOnInit(): void {
  }

}
