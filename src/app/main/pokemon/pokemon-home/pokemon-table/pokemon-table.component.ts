import {Component, Input, OnInit} from '@angular/core';
import {NamedResource} from '../../../../shared/domain/named-resource';


@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {

  @Input() public pokemonList: NamedResource[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
