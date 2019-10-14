import { GiveList } from './give-list';
import { Item } from './item';

export class Usr {

  private id: number;

  public get _id(): number {
    return this.id;
  }

  public set _id(value: number) {
    this.id = value;
  }

  private username: string;

  public get _username(): string {
    return this.username;
  }

  public set _username(value: string) {
    this.username = value;
  }

  private password: string;

  public get _password(): string {
    return this.password;
  }

  public set _password(value: string) {
    this.password = value;
  }

  private avatar: string;

  public get _avatar(): string {
    return this.avatar;
  }

  public set _avatar(value: string) {
    this.avatar = value;
  }

  private email: string;

  public get _email(): string {
    return this.email;
  }

  public set _email(value: string) {
    this.email = value;
  }

  private phone: string;

  public get _phone(): string {
    return this.phone;
  }

  public set _phone(value: string) {
    this.phone = value;
  }

  private town: string;

  public get _town(): string {
    return this.town;
  }

  public set _town(value: string) {
    this.town = value;
  }

  private givelist: GiveList;

  public get _givelist(): GiveList {
    return this.givelist;
  }

  public set _givelist(value: GiveList) {
    this.givelist = value;
  }

  private likedItems: Array<Item>;

  public get _likedItems(): Array<Item> {
    return this.likedItems;
  }

  public set _likedItems(value: Array<Item>) {
    this.likedItems = value;
  }

  public deserialize(datas: any): Usr {
    Object.assign(this, datas);
    return this;
  }
}
