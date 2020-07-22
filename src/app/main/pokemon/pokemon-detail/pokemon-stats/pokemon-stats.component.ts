import {Component, Input, OnInit} from '@angular/core';
import {ApiNamedResource} from '../../../../shared/domain/api-resource';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss']
})
export class PokemonStatsComponent implements OnInit {

  @Input() pokemonStats: {
    base_stat: number,
    effort: number,
    stat: ApiNamedResource
  }[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
