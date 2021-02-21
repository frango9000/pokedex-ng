import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Ability } from '@pokedex-ng/domain';
import { Subscription } from 'rxjs';
import { AbilityService } from '../../../../../shared/services/ability.service';
import { GameVersionService } from '../../../../../shared/services/game-version.service';

@Component({
  selector: 'app-pokemon-ability',
  templateUrl: './pokemon-ability.component.html',
  styleUrls: ['./pokemon-ability.component.scss'],
})
export class PokemonAbilityComponent implements OnInit, OnDestroy {
  @Input() abilityId: string | number;

  ability: Ability;

  activeVersion = 'en';
  private versionSub: Subscription;

  constructor(private abilityService: AbilityService, private versionService: GameVersionService) {}

  ngOnInit(): void {
    this.versionSub = this.versionService.activeVersion$.subscribe((value) => (this.activeVersion = value));
    this.abilityService.fetchApiOneAbility(this.abilityId).subscribe((ability) => {
      this.ability = ability;
    });
  }

  ngOnDestroy(): void {
    this.versionSub.unsubscribe();
  }
}
