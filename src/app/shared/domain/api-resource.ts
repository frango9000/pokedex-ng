export interface ApiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export class ApiResource {
  url: string;

  constructor(data: any) {
    Object.assign(this, data);
  }

  private _id: number = null;

  get id(): number {
    if (!this._id) {
      this._id = Number(this.url.split('/').reverse()[1]);
    }
    return this._id;
  }

  set id(id: number) {
    this._id = Number(this.url.split('/').reverse()[1]);
  }
}

export class ApiNamedResource extends ApiResource {
  name: string;

}

export interface ApiName {
  name: string;
  language: ApiNamedResource;
}

export interface ApiFlavorTextEntry {
  flavor_text: string;
  language: ApiNamedResource;
  version_group: ApiNamedResource;
}

export interface ApiEffectEntry {
  effect: string;
  short_effect: string;
  language: ApiNamedResource;
}

export interface ApiEffectChange {
  effect_entries: ApiEffectEntry[];
  version_group: ApiNamedResource;
}
