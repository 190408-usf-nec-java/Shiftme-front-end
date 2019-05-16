import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signUpStatusSubject = new Subject<number>();
  public  $signUpStatus = this.signUpStatusSubject.asObservable();
  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  username: string;
  password: string;

  signup(username: string, password: string): Observable<any> {
    const payload = {
      username: username,
      password: password
    };
    return this.httpClient.post('http://localhost:8080/ex/signup', payload)
  }
}
