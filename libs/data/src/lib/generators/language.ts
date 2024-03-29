import { Language, PxLanguage } from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';

export class LanguageGenerator extends AbstractGenerator<Language, PxLanguage> {
  constructor() {
    super('language');
  }

  mapResource(resource: Language): PxLanguage {
    return {
      id: resource.id,
      name: resource.name,
      iso3166: resource.iso3166,
      names: this.filterAndMapNames(resource.names),
    };
  }

  protected override filterResources(resource: Language): boolean {
    return !!(super.filterResources(resource) && resource.names.length && resource.official);
  }
}
