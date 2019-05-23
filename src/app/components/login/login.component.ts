import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import{ Users } from 'src/app/classes/users';
import { Router } from '@angular/router';
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

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.currentUser = new Users('Amna', null,null,null,1,null);
    this.loginResponse = this.loginService.$loginStatus.subscribe(status => {
      if (status === 200) {
        this.router.navigateByUrl('shifts');
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
  passwordValid(): boolean {
    return this.password.length > 8;
  }
  userValid(): boolean {
    return this.username.length > 5;
  }
  submit() {
    this.loginService.login(this.username, this.password);
  }
  validationClassesForUser(): string {
    if (this.userValid()) {
      return 'form-control is-valid col-12';
    } else {
      return 'form-control is-invalid col-12'
    }
  }
  validationClassesForPassword(): string {
    if (this.passwordValid()) {
      return 'form-control is-valid col-12';
    } else {
      return 'form-control is-invalid col-12'
    }
  }
  

}
