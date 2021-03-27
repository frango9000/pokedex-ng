import { Language } from './language';

export interface ApiEntity {
  id?: number;
  name?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ApiResource<T extends ApiEntity = ApiEntity> {
  url: string;
}

export interface NamedApiResource<T extends ApiEntity = ApiEntity> extends ApiResource<T> {
  name: string;
}

export interface ApiResourceList<T extends NamedApiResource = NamedApiResource> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface ApiName {
  name: string;
  language: NamedApiResource<Language>;
}

export interface ApiDescription {
  description: string;
  language: NamedApiResource<Language>;
}

export function getId(url: string): number {
  try {
    return Number(url?.split('/').reverse()[1]) || 0;
  } catch (e) {
    return 0;
  }
}

//Non Api Content

export interface LocalizedName {
  name: string;
  language: string;
}

export interface LocalizedDescription {
  description: string;
  language: string;
}

export interface SelectableResource<T> {
  active: boolean;
  resource: T;
}
