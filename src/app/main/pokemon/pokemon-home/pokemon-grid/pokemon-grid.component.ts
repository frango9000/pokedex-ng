import {Component, Input, OnInit} from '@angular/core';
import {NamedResource} from '../../../../shared/domain/named-resource';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {

  @Input() public pokemonList: NamedResource[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
