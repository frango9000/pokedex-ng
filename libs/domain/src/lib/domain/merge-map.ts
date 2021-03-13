import { merge } from 'lodash-es';

export class MergingMap extends Map {
  static mergeMaps(maps: MergingMap[]) {
    const translations = new MergingMap();
    maps.forEach((map) => map.forEach((value, key) => translations.merge(key, value)));
    return translations;
  }

  static ofSingleResource<R>(resources: R[], mergeIn: (resource: R) => MergingObject): MergingMap {
    const translations = new MergingMap();
    resources.map((resource) => mergeIn(resource)).forEach((value) => translations.merge(value.key, value.object));
    return translations;
  }

  static ofMultipleResources<P, R>(
    parent: P[],
    resourcesKey: string,
    mergeIn: (parentResource: P, resource: R) => MergingObject
  ): MergingMap {
    const translations = new MergingMap();
    parent.forEach((parentResource) =>
      parentResource[resourcesKey]
        .map((resource) => mergeIn(parentResource, resource))
        .forEach((value) => translations.merge(value.key, value.object))
    );
    return translations;
  }

  merge(key: any, value: any) {
    const hasKey = this.get(key);
    return super.set(key, hasKey ? merge(hasKey, value) : value);
  }
}

export interface MergingObject {
  key: string;
  object: any;
}
