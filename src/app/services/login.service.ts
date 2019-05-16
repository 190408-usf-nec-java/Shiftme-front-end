import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();
  currentUser: User;
  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  username: string;
  password: string;


  login(username: string, password: string): void {
    const payload = {
      username: username,
      password: password
    }
    this.httpClient.post('http://localhost:8080/ex/login', payload, {
      observe: 'response',
      }).pipe(map(response => response.body as User))
      .subscribe(response => {
        this.loginStatusSubject.next(200);
        this.currentUser = response;
        // add cookies here
        console.log(this.currentUser);
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
  submit() {
    this.login(this.username, this.password);
  }
  valid(): boolean {
    return this.username.length > 5 && this.password.length > 8;
  }
}
