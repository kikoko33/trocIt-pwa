import { Usr } from './usr';
import { Item } from './item';

export class GiveList {

  private id: number;

  public get _id(): number {
    return this.id;
  }

  public set _id(value: number) {
    this.id = value;
  }

  private owner: Usr;

  public get _owner(): Usr {
    return this.owner;
  }

  public set _owner(value: Usr) {
    this.owner = value;
  }

  private usrItems: Array<Item>;

  public get _usrItems(): Array<Item> {
    return this.usrItems;
  }

  public set _usrItems(value: Array<Item>) {
    this.usrItems = value;
  }

}
