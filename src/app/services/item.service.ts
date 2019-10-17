import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl: string;

  constructor(private http: HttpClient) {
    this.itemsUrl = 'http://localhost:8080/users/' + localStorage.getItem('currentUsr') + '/items/';
  }

  public findAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  public findById(id: number): Observable<Item> {
    return this.http.get<Item>(this.itemsUrl + id);
  }

  public save(item: Item) {

    console.log('Coucou cest le service ' + item._title);

    return this.http.post<Item>(this.itemsUrl, item);
  }

  public update(item: Item) {

    console.log('5 min mdr' + item._title);

    return this.http.put<Item>(this.itemsUrl + item._id, item);
  }

  public delete(id: number) {
    console.log('ça dégage !');
    console.log(this.itemsUrl + id);
    return this.http.delete(this.itemsUrl + id);
  }

}
