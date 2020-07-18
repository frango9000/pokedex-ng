import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../../../shared/domain/pokemon';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {

  @Input() public pokemonList: Pokemon[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
