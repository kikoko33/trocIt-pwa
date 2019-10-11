import { GiveList } from './give-list';
import { Usr } from './usr';

export class Item {

  private _title: string;

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  private _photo: string;

  public get photo(): string {
    return this._photo;
  }

  public set photo(value: string) {
    this._photo = value;
  }

  private _description: string;

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  private _giveList: GiveList;

  public get giveList(): GiveList {
    return this._giveList;
  }

  public set giveList(value: GiveList) {
    this._giveList = value;
  }

  private _likers: Array<Usr>;

  public get likers(): Array<Usr> {
    return this._likers;
  }

  public set likers(value: Array<Usr>) {
    this._likers = value;
  }

}
