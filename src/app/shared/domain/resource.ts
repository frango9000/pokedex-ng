export class Resource {
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
