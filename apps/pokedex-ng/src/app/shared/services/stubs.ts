import { of } from 'rxjs';
import { AppNavbarService } from './app/app-navbar.service';
import { FilterService } from './app/filter.service';
import { BaseService } from './base-service';
import { EvolutionChainService } from './evolution/evolution-chain.service';
import { EvolutionTriggerService } from './evolution/evolution-trigger.service';
import { GenerationService } from './game/generation.service';
import { LanguageService } from './game/language.service';
import { VersionGroupService } from './game/version-group.service';
import { LocationService } from './location/location.service';
import { MachineService } from './machine/machine.service';

export class StubBaseService<T> implements Partial<BaseService<T, T>> {
  getAll = () => of([]);
  fetchApiOne = () => of(null);
}

export class StubLanguageService implements Partial<LanguageService> {
  getDisplayLanguage$ = () => of(null);
}

export const stubLanguageServiceProvider = {
  provide: LanguageService,
  useClass: StubLanguageService,
};

export class StubVersionGroupService implements Partial<VersionGroupService> {
  public getActiveVersionGroup$ = () => of('');
}

export const stubVersionGroupServiceProvider = {
  provide: VersionGroupService,
  useClass: StubVersionGroupService,
};

export class StubFilterService implements Partial<FilterService> {
  getGenerationFilter$ = () => of([]);
  getItemPocketFilter$ = () => of([]);
  getItemCategoryFilter$ = () => of([]);
  getTypeFilter$ = () => of('');
  getTypesFilter$ = () => of([]);
  getTypesFilterInclusiveness$ = () => of(true);
  getQueryFilter$ = () => of('');
  clearAllFilters = () => {};
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
  getShowSearchBar$ = () => of(true);
  getShowFiltersButton$ = () => of(true);
  getShowGridButton$ = () => of(true);
  getShowVersionGroupPicker$ = () => of(true);
  showGridButton = () => undefined;
  showSearchBar = () => undefined;
  showFiltersButton = () => undefined;
  showVersionGroupPicker = () => {};
}

export const stubAppNavbarServiceProvider = {
  provide: AppNavbarService,
  useClass: StubAppNavbarService,
};

export class StubEvolutionChainService implements Partial<EvolutionChainService> {}

export const stubEvolutionChainServiceProvider = {
  provide: EvolutionChainService,
  useClass: StubEvolutionChainService,
};

export class StubEvolutionTriggerService implements Partial<EvolutionTriggerService> {}

export const stubEvolutionTriggerServiceProvider = {
  provide: EvolutionTriggerService,
  useClass: StubEvolutionTriggerService,
};

export class StubLocationService implements Partial<LocationService> {}

export const stubLocationServiceProvider = {
  provide: LocationService,
  useClass: StubLocationService,
};

export class StubGenerationService extends StubBaseService<GenerationService> implements Partial<GenerationService> {}

export const stubGenerationServiceProvider = {
  provide: GenerationService,
  useClass: StubGenerationService,
};

export class StubMachineService extends StubBaseService<MachineService> implements Partial<MachineService> {}

export const stubMachineServiceProvider = {
  provide: MachineService,
  useClass: StubMachineService,
};
