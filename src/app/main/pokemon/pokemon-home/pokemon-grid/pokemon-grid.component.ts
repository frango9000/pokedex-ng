import {Component, Input, OnInit} from '@angular/core';
import {ApiNamedResource} from '../../../../shared/domain/api-resource';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {

  @Input() public pokemonList: ApiNamedResource[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
