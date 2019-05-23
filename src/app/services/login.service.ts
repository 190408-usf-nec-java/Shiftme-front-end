import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();
  currentUser: Users;
  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  username: string;
  password: string;
  private loggedIn: boolean;

  login(username: string, password: string): void {
    const payload = {
      username: username,
      password: password
    }
    this.httpClient.post('http://localhost:8080/ex/login', payload, {
      observe: 'response',
      }).pipe(map(response => response.body as Users))
      .subscribe(response => {
        this.loginStatusSubject.next(200);
        this.currentUser = response;
        // add cookies here
        console.log(this.currentUser);
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
  getLoggedIn(): boolean {
    return this.loggedIn;
  }
  setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }
}
