import {Component, Input, OnInit} from '@angular/core';
import {PokemonMoveService} from '../../services/pokemon-move.service';
import {PokemonAbility} from '../../domain/pokemon-ability';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pokemon-ability',
  templateUrl: './pokemon-ability.component.html',
  styleUrls: ['./pokemon-ability.component.scss']
})
export class PokemonAbilityComponent implements OnInit {

  @Input() abilityId: string | number;

  ability$: Observable<PokemonAbility>;

  constructor(private pokemonMoveService: PokemonMoveService) {
  }

  ngOnInit(): void {
    this.ability$ = this.pokemonMoveService.getAbility(this.abilityId);
  }

}
