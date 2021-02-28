import { ApiEntity, ApiName } from '../domain/domain';
import { VersionGroup } from './version-group';

export interface GameVersion extends ApiEntity {
  names: ApiName[];
  version_group: VersionGroup;
}
