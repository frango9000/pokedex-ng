import { merge } from 'lodash-es';

export class MergingMap extends Map {
  merge(key: any, value: any) {
    const hasKey = this.get(key);
    return super.set(key, hasKey ? merge(hasKey, value) : value);
  }
}
