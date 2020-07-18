import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../../../shared/domain/pokemon';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {

  @Input() public pokemonList: Pokemon[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
