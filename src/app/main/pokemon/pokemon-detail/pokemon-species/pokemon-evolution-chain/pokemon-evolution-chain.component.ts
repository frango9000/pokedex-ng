import {Component, Input, OnInit} from '@angular/core';
import {PokemonSpecies} from '../../../../../shared/domain/pokemon-species';

@Component({
  selector: 'app-pokemon-evolution-chain',
  templateUrl: './pokemon-evolution-chain.component.html',
  styleUrls: ['./pokemon-evolution-chain.component.scss']
})
export class PokemonEvolutionChainComponent implements OnInit {

  @Input() public pokemonSpecies: PokemonSpecies;

  constructor() {
  }

  ngOnInit(): void {
  }

}
