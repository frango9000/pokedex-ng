import { Component, Input, OnInit } from '@angular/core';
import { Ability } from '@pokedex-ng/domain';
import { AbilityService } from '../../../../../shared/services/pokemon/ability.service';

@Component({
  selector: 'app-pokemon-ability',
  templateUrl: './pokemon-ability.component.html',
  styleUrls: ['./pokemon-ability.component.scss'],
})
export class PokemonAbilityComponent implements OnInit {
  @Input() abilityId: string | number;

  public ability: Ability;

  constructor(private abilityService: AbilityService) {}

  ngOnInit(): void {
    this.abilityService.fetchApiOneAbility(this.abilityId).subscribe((ability) => (this.ability = ability));
  }
}
