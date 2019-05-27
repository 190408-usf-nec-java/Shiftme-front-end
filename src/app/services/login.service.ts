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
  private loggedIn = false;

  login(username: string, password: string): void {
    const payload = {
      username: username,
      password: password
    }
    this.httpClient.post('http://localhost:8081/cred/login', payload, {
      observe: 'response',
      }).pipe(map(response => response.body as Users))
      .subscribe(response => {
        this.currentUser = response;
        this.cookieService.set('role', this.currentUser.role.toString());
        this.loggedIn = true;
        this.loginStatusSubject.next(200);
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
  getLoggedIn(): boolean {
    return this.loggedIn;
  }

  logOff() {
    this.loggedIn = false;
  }
}
