import { FilterService } from './filter.service';

export class StubFilterService implements Partial<StubFilterService> {}

export const stubFilterServiceProvider = {
  provide: FilterService,
  useClass: StubFilterService,
};
