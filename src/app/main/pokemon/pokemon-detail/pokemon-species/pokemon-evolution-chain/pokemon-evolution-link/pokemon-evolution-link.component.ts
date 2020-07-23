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
        trigger = 'Level ' + (method.min_level ? method.min_level : ' up');
        break;
      case 'trade':
        trigger = 'When Traded ' + (method.trade_species ? ('for ' + method.trade_species) : '');
        break;
      case 'use-item':
        trigger = 'Use a ' + (method.item.name ? method.item.name : '');
        break;
      case 'shed':
        trigger = 'Pokeball in bag and free slot in party.';
        break;
    }
    if (method.location) {
      trigger += (' @ ' + method.location.name);
    }
    if (method.known_move_type) {
      trigger += (' knowing a move of type: ' + method.known_move_type.name);
    }
    if (method.known_move) {
      trigger += (' knowing move: ' + method.known_move.name);
    }
    if (method.min_affection) {
      trigger += ' with high affection';
    }
    if (method.min_beauty) {
      trigger += ' with high beauty';
    }
    if (method.min_happiness) {
      trigger += ' with high happiness';
    }
    if (method.gender) {
      conditions.push('Gender: ' + method.gender);
    } // TODO
    if (method.held_item) {
      conditions.push('Holding item: ' + method.held_item.name);
    }
    if (method.party_species) {
      conditions.push(method.party_species.name + ' in party');
    }
    if (method.party_type) {
      conditions.push('Pokemon of type ' + method.party_type.name + ' in party');
    }
    if (method.time_of_day) {
      conditions.push('Time: ' + method.time_of_day);
    }
    if (method.relative_physical_stats) {
      conditions.push('Stats: ' + (method.relative_physical_stats > 0 ? 'offensive' : (method.relative_physical_stats < 0 ? 'defensive' : 'balanced')));
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
