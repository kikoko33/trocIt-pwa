import { GiveList } from './give-list';
import { Item } from './item';

export class Usr {

  private _usrId: number;

  public get usrId(): number {
    return this._usrId;
  }

  public set usrId(value: number) {
    this._usrId = value;
  }

  private _username: string;

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  private _password: string;

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  private _avatar: string;

  public get avatar(): string {
    return this._avatar;
  }

  public set avatar(value: string) {
    this._avatar = value;
  }

  private _email: string;

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  private _phone: string;

  public get phone(): string {
    return this._phone;
  }

  public set phone(value: string) {
    this._phone = value;
  }

  private _town: string;

  public get town(): string {
    return this._town;
  }

  public set town(value: string) {
    this._town = value;
  }

  private _givelist: GiveList;

  public get givelist(): GiveList {
    return this._givelist;
  }

  public set givelist(value: GiveList) {
    this._givelist = value;
  }

  private _likedItems: Array<Item>;

  public get likedItems(): Array<Item> {
    return this._likedItems;
  }

  public set likedItems(value: Array<Item>) {
    this._likedItems = value;
  }
}
