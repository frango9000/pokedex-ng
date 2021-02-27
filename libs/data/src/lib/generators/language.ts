import { Language, PxLanguage } from '@pokedex-ng/domain';
import { AbstractGenerator } from '../model/abstract-generator';

export class LanguageGenerator extends AbstractGenerator<Language, PxLanguage> {
  getResourceName(): string {
    return 'language';
  }

  mapResource(resource: Language): PxLanguage {
    return {
      name: resource.name,
      id: resource.id,
      iso3166: resource.iso3166,
      names: this.filterAndMapNames(resource.names),
    };
  }

  protected filterResources(resource: Language): boolean {
    return super.filterResources(resource) && resource.names.length && resource.official;
  }
}
