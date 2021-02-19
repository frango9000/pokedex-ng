import { of } from 'rxjs';
import { FilterService } from './filter.service';

export class StubFilterService implements Partial<FilterService> {
  getQueryObservable = () => of('');
  getGridMode$ = () => of(true);
  showAll = () => undefined;
  hideAll = () => undefined;
}

export const stubFilterServiceProvider = {
  provide: FilterService,
  useClass: StubFilterService,
};
