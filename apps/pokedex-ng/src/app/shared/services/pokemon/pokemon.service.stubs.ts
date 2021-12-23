import { StubBaseService } from '../stubs';
import { AbilityService } from './ability.service';
import { PokemonService } from './pokemon.service';
import { StatService } from './stat.service';
import { TypeService } from './type.service';

export class StubTypeService extends StubBaseService<TypeService> implements Partial<TypeService> {}

export const stubTypeServiceProvider = {
  provide: TypeService,
  useClass: StubTypeService,
};

export class StubAbilityService extends StubBaseService<AbilityService> implements Partial<AbilityService> {}

export const stubAbilityServiceProvider = {
  provide: AbilityService,
  useClass: StubAbilityService,
};

export class StubPokemonService extends StubBaseService<PokemonService> implements Partial<PokemonService> {}

export const stubPokemonServiceProvider = {
  provide: PokemonService,
  useClass: StubPokemonService,
};

export class StubStatService implements Partial<StatService> {}

export const stubStatServiceProvider = {
  provide: StatService,
  useClass: StubStatService,
};
