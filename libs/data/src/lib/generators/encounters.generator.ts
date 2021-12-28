import {
  EncounterCondition,
  EncounterConditionValue,
  EncounterMethod,
  PxEncounterCondition,
  PxEncounterConditionValue,
  PxEncounterMethod,
} from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';

export class EncounterMethodGenerator extends AbstractGenerator<EncounterMethod, PxEncounterMethod> {
  constructor() {
    super('encounter-method');
  }

  protected mapResource(resource: EncounterMethod): PxEncounterMethod {
    return {
      id: resource.id,
      name: resource.name,
      names: this.filterAndMapNames(resource.names),
    };
  }
}

export class EncounterConditionGenerator extends AbstractGenerator<EncounterCondition, PxEncounterCondition> {
  constructor() {
    super('encounter-condition');
  }

  protected mapResource(resource: EncounterCondition): PxEncounterCondition {
    return {
      id: resource.id,
      name: resource.name,
      names: this.filterAndMapNames(resource.names),
    };
  }
}

export class EncounterConditionValueGenerator extends AbstractGenerator<
  EncounterConditionValue,
  PxEncounterConditionValue
> {
  constructor() {
    super('encounter-condition-value');
  }

  protected mapResource(resource: EncounterConditionValue): PxEncounterConditionValue {
    return {
      id: resource.id,
      name: resource.name,
      names: this.filterAndMapNames(resource.names),
      condition: resource.condition.name,
    };
  }
}
