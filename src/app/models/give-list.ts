import { Usr } from './usr';
import { Item } from './item';

export class GiveList {

  private _glId: number;

  public get glId(): number {
    return this._glId;
  }

  public set glId(value: number) {
    this._glId = value;
  }

  private _owner: Usr;

  public get owner(): Usr {
    return this._owner;
  }

  public set owner(value: Usr) {
    this._owner = value;
  }

  private _usrItems: Array<Item>;

  public get usrItems(): Array<Item> {
    return this._usrItems;
  }

  public set usrItems(value: Array<Item>) {
    this._usrItems = value;
  }

}
