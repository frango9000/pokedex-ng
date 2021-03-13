import { StubBaseService } from '../stubs';
import { MoveAilmentService } from './move-ailment.service';
import { MoveCategoryService } from './move-category.service';
import { MoveDamageClassService } from './move-damage-class.service';
import { MoveLearnMethodService } from './move-learn-method.service';
import { MoveTargetService } from './move-target.service';
import { MoveService } from './move.service';

export class StubMoveService extends StubBaseService<MoveService> implements Partial<MoveService> {}

export const stubMoveServiceProvider = {
  provide: MoveService,
  useClass: StubMoveService,
};

export class StubMoveAilmentService
  extends StubBaseService<MoveAilmentService>
  implements Partial<MoveAilmentService> {}

export const stubMoveAilmentServiceProvider = {
  provide: MoveAilmentService,
  useClass: StubMoveAilmentService,
};

export class StubMoveCategoryService
  extends StubBaseService<MoveCategoryService>
  implements Partial<MoveCategoryService> {}

export const stubMoveCategoryServiceProvider = {
  provide: MoveCategoryService,
  useClass: StubMoveCategoryService,
};

export class StubMoveDamageClassService
  extends StubBaseService<MoveDamageClassService>
  implements Partial<MoveDamageClassService> {}

export const stubMoveDamageClassServiceProvider = {
  provide: MoveDamageClassService,
  useClass: StubMoveDamageClassService,
};

export class StubMoveLearnMethodService
  extends StubBaseService<MoveLearnMethodService>
  implements Partial<MoveLearnMethodService> {}

export const stubMoveLearnMethodServiceProvider = {
  provide: MoveLearnMethodService,
  useClass: StubMoveLearnMethodService,
};

export class StubMoveTargetService extends StubBaseService<MoveTargetService> implements Partial<MoveTargetService> {}

export const stubMoveTargetServiceProvider = {
  provide: MoveTargetService,
  useClass: StubMoveTargetService,
};
