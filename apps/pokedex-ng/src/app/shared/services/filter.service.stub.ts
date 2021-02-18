import { of } from 'rxjs';
import { FilterService } from './filter.service';

export class StubFilterService implements Partial<FilterService> {
  getQueryObservable = () => of('');
}

export const stubFilterServiceProvider = {
  provide: FilterService,
  useClass: StubFilterService,
};
