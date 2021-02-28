import { of } from 'rxjs';
import { AppNavbarService } from './app/app-navbar.service';
import { FilterService } from './app/filter.service';
import { LanguageService } from './app/language.service';
import { BaseService } from './base-service';
import { EvolutionChainService } from './evolution/evolution-chain.service';
import { VersionGroupService } from './game/version-group.service';
import { AbilityService } from './pokemon/ability.service';
import { MoveService } from './pokemon/move.service';
import { PokemonService } from './pokemon/pokemon.service';
import { StatService } from './pokemon/stat.service';
import { TypeService } from './pokemon/type.service';
import { SpeciesService } from './species/species.service';

class StubBaseService<T> implements Partial<BaseService<T, T>> {
  getAll = () => of([]);
  fetchApiOne = () => of(null);
}

export class StubTypeService extends StubBaseService<TypeService> implements Partial<TypeService> {}

export const stubTypeServiceProvider = {
  provide: TypeService,
  useFactory: () => new StubTypeService(),
};

export class StubMoveService extends StubBaseService<MoveService> implements Partial<MoveService> {}

export const stubMoveServiceProvider = {
  provide: MoveService,
  useFactory: () => new StubMoveService(),
};

export class StubAbilityService extends StubBaseService<AbilityService> implements Partial<AbilityService> {}

export const stubAbilityServiceProvider = {
  provide: AbilityService,
  useFactory: () => new StubAbilityService(),
};

export class StubSpeciesService implements Partial<SpeciesService> {}

export const stubSpeciesServiceProvider = {
  provide: SpeciesService,
  useFactory: () => new StubSpeciesService(),
};

export class StubLanguageService implements Partial<LanguageService> {
  getDisplayLanguage$ = () => of(null);
}

export const stubLanguageServiceProvider = {
  provide: LanguageService,
  useFactory: () => new StubLanguageService(),
};

export class StubPokemonService implements Partial<PokemonService> {
  getAllPokemonLocal = jest.fn(() => of([]));
  getAllPokemonFiltered = jest.fn(() => of([]));
}

export const stubPokemonServiceProvider = {
  provide: PokemonService,
  useFactory: () => new StubPokemonService(),
};

export class StubVersionGroupService implements Partial<VersionGroupService> {
  public getActiveVersionGroup$ = () => of('');
}

export const stubVersionGroupServiceProvider = {
  provide: VersionGroupService,
  useFactory: () => new StubVersionGroupService(),
};

export class StubFilterService implements Partial<FilterService> {
  getGenerationFilter$ = () => of([]);
  getTypeFilter$ = () => of([]);
  getTypesFilterInclusiveness$ = () => of(true);
  getQueryFilter$ = () => of('');
  clearAllFilters = () => undefined;
  filterPokemonByName = (x) => x;
  filterPokemonByType = (x) => x;
  filterPokemonByGeneration = (x) => x;
}

export const stubFilterServiceProvider = {
  provide: FilterService,
  useClass: StubFilterService,
};

export class StubAppNavbarService implements Partial<AppNavbarService> {
  showAll = () => undefined;
  hideAll = () => undefined;
  getShowFilters$ = () => of(true);
  hideFilters = () => undefined;
  getGridMode$ = () => of(true);
}

export const stubAppNavbarServiceProvider = {
  provide: AppNavbarService,
  useFactory: () => new StubAppNavbarService(),
};

export class StubEvolutionChainService implements Partial<EvolutionChainService> {}

export const stubEvolutionChainServiceProvider = {
  provide: EvolutionChainService,
  useFactory: () => new StubEvolutionChainService(),
};

export class StubStatService implements Partial<StatService> {}

export const stubStatServiceProvider = {
  provide: StatService,
  useFactory: () => new StubStatService(),
};
