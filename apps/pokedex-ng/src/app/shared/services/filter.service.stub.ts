import { of } from 'rxjs';
import { FilterService } from './filter.service';

export class StubFilterService implements Partial<FilterService> {
  getGridMode$ = () => of(true);
  showAll = () => undefined;
  hideAll = () => undefined;
  getTypeFilter$ = () => of([]);
  getTypesFilterInclusiveness$ = () => of(true);
  getShowFilters$ = () => of(true);
  getQueryFilter$ = () => of('');
  hideFilters = () => undefined;
  clearAllFilters = () => undefined;
  filterPokemonByName = (x) => x;
  filterPokemonByType = (x) => x;
}

export const stubFilterServiceProvider = {
  provide: FilterService,
  useClass: StubFilterService,
};
