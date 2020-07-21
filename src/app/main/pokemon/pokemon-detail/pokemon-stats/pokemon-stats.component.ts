import {Component, Input, OnInit} from '@angular/core';
import {NamedResource} from '../../../../shared/domain/named-resource';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss']
})
export class PokemonStatsComponent implements OnInit {

  @Input() pokemonStats: {
    base_stat: number,
    effort: number,
    stat: NamedResource
  }[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
