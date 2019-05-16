import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loginResponse: Subscription;
  lastStatus = 200;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginResponse = this.loginService.$loginStatus.subscribe(status => {
      if (status === 200) {

      } else {
        this.lastStatus = status;
      }
    });
  }

  ngOnDestroy() {
    if (this.loginResponse) {
      this.loginResponse.unsubscribe();
    }
  }
  formValidation(): boolean {
    return this.username.length > 5 && this.password.length > 8;
  }

  submit() {
    this.loginService.login(this.username, this.password);
  }

}
