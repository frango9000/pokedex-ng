import {Component, Input, OnInit} from '@angular/core';
import {PokemonEvolutionChainLink, PokemonEvolutionDetail} from '../../../../../../shared/domain/pokemon-evolution-chain';

@Component({
  selector: 'app-pokemon-evolution-link',
  templateUrl: './pokemon-evolution-link.component.html',
  styleUrls: ['./pokemon-evolution-link.component.scss']
})
export class PokemonEvolutionLinkComponent implements OnInit {

  @Input() link: PokemonEvolutionChainLink;

  constructor() {
  }

  ngOnInit(): void {
  }

  getEvolutionMethodText(method: PokemonEvolutionDetail): { trigger: string, conditions: string[] } {
    let trigger = '';
    const conditions: string[] = [];
    switch (method.trigger.name) {
      case 'level-up':
        trigger = 'At level ' + (method.min_level ? method.min_level : ' up');
        break;
      case 'trade':
        trigger = 'When Traded ' + (method.trade_species ? ('for ' + method.trade_species) : '');
        break;
      case 'use-item':
        trigger = 'Use Item ' + (method.item.name ? method.item.name : '');
        break;
      case 'shed':
        trigger = 'Shed?';
        break;
    }
    if (method.gender) {
      conditions.push('Gender must be ' + method.gender);
    } // TODO
    if (method.held_item) {
      conditions.push('Pokemon must hold ' + method.held_item.name);
    }
    if (method.known_move_type) {
      conditions.push('Pokemon must know a move of type: ' + method.known_move_type.name);
    }
    if (method.known_move) {
      conditions.push('Pokemon must know move: ' + method.known_move.name);
    }
    if (method.location) {
      conditions.push('Location: ' + method.location.name);
    }
    if (method.min_affection) {
      conditions.push('Min Affection: ' + method.min_affection);
    }
    if (method.min_beauty) {
      conditions.push('Min Beauty: ' + method.min_beauty);
    }
    if (method.min_happiness) {
      conditions.push('Min Happiness: ' + method.min_happiness);
    }
    if (method.party_species) {
      conditions.push('You must have a ' + method.party_species.name + ' in your party');
    }
    if (method.party_type) {
      conditions.push('You must have a Pokemon of type ' + method.party_type.name + ' in your party');
    }
    if (method.time_of_day) {
      conditions.push('Time must be ' + method.time_of_day);
    }
    if (method.relative_physical_stats) {
      conditions.push('Stats must be ' + (method.relative_physical_stats > 0 ? 'offensive' : (method.relative_physical_stats < 0 ? 'defensive' : 'balanced')));
    }
    if (method.needs_overworld_rain) {
      conditions.push('Overworld rain required');
    }
    if (method.turn_upside_down) {
      conditions.push('Turn 3ds Up-side Down');
    }
    return {trigger, conditions};
  }
}
