import { EvolutionChain } from '@pokedex-ng/domain';
import { of } from 'rxjs';
import { AppNavbarService } from './app/app-navbar.service';
import { FilterService } from './app/filter.service';
import { LanguageService } from './app/language.service';
import { EvolutionChainService } from './evolution/evolution-chain.service';
import { GameVersionService } from './game/game-version.service';
import { AbilityService } from './pokemon/ability.service';
import { MoveService } from './pokemon/move.service';
import { PokemonService } from './pokemon/pokemon.service';
import { StatService } from './pokemon/stat.service';
import { TypeService } from './pokemon/type.service';
import { SpeciesService } from './species/species.service';

export class StubTypeService implements Partial<TypeService> {
  getOneType = jest.fn(() => of(null));
  getAllTypes = jest.fn(() => of([]));
}

export const stubTypeServiceProvider = {
  provide: TypeService,
  useFactory: () => new StubTypeService(),
};

export class StubMoveService implements Partial<MoveService> {
  public getAllMoves = jest.fn(() => of([]));
  public fetchApiOneMove = jest.fn(() => of(null));
  public fetchApiOneAbility = jest.fn(() => of(null));
}

export const stubMoveServiceProvider = {
  provide: MoveService,
  useFactory: () => new StubMoveService(),
};

export class StubAbilityService implements Partial<AbilityService> {
  fetchApiOneAbility = () => of(null);
}

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

export class StubGameVersionService implements Partial<GameVersionService> {
  public getActiveVersion$ = () => of('');
  public matchesDisplayVersion = () => true;
  public getAllVersionGroups = () => of([]);
}

export const stubGameVersionServiceProvider = {
  provide: GameVersionService,
  useFactory: () => new StubGameVersionService(),
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

export class StubEvolutionChainService implements Partial<EvolutionChainService> {
  public getEvolutionChain = jest.fn(() => of({} as EvolutionChain));
}

export const stubEvolutionChainServiceProvider = {
  provide: EvolutionChainService,
  useFactory: () => new StubEvolutionChainService(),
};

export class StubStatService implements Partial<StatService> {}

export const stubStatServiceProvider = {
  provide: StatService,
  useFactory: () => new StubStatService(),
};
