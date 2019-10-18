import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usr } from '../models/usr';
import { Observable } from 'rxjs';
/*import { environment } from 'src/environments/environment';*/

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users/';
  }

  public findAll(): Observable<Usr[]> {
    return this.http.get<Usr[]>(this.usersUrl);
  }

  public save(usr: Usr) {

    console.log('Coucou cest le service ' + usr._username);

    return this.http.post<Usr>(this.usersUrl, usr);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////
  public savePicture(newUsr: FormData) {

    return this.http.post<FormData>(this.usersUrl, newUsr);
  }
////////////////////////////////////////////////////////////////////////////////////////////////

  public delete(id: number) {
    console.log('ça dégage !');
    console.log(this.usersUrl + id);
    return this.http.delete(this.usersUrl + id);
  }
}
