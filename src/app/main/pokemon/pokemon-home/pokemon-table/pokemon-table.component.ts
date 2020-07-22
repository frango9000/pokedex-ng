import {Component, Input, OnInit} from '@angular/core';
import {ApiNamedResource} from '../../../../shared/domain/api-resource';


@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {

  @Input() public pokemonList: ApiNamedResource[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
