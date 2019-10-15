import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GiveList } from '../models/give-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiveListService {

  private giveListUrl: string;

  constructor(private http: HttpClient) {
    this.giveListUrl = 'http://localhost:8080/lists/';
  }

  public save(giveList: GiveList) {

    console.log('Coucou cest le service spèce de liste ');

    return this.http.post<GiveList>(this.giveListUrl, giveList);
  }

}
