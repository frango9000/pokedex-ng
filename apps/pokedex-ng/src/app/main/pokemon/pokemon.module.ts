import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoveService } from '../../shared/services/move/move.service';
import { AbilityService } from '../../shared/services/pokemon/ability.service';
import { PokemonService } from '../../shared/services/pokemon/pokemon.service';
import { StatService } from '../../shared/services/pokemon/stat.service';
import { TypeService } from '../../shared/services/pokemon/type.service';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  imports: [CommonModule, PokemonRoutingModule],
})
export class PokemonModule {
  constructor(
    private pokemonService: PokemonService,
    private statService: StatService,
    private abilityService: AbilityService,
    private moveService: MoveService,
    private typeService: TypeService
  ) {}
}
