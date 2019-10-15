import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public byLogin(login: string): Observable<any> {
    return this.http.get(
      environment.apiRoot + 'users/login/' + login,
      {
        observe: 'response'
        /*
        Renvoie un response entity
        Toutes les methodes Angular qui vont communiquer avec le back seront des observables
        */
      }
    );
  }

}
