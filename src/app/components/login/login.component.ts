import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/classes/users';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.loginService.currentUser = new Users('Amna', null,null,2,1,null);
    console.log(this.loginService.currentUser.role);
    this.loginResponse = this.loginService.$loginStatus.subscribe(status => {
      if (status === 200) {
        
      } else {
        this.lastStatus = status;
      }
    });
    //this.loginService.currentUser = new Users('Amna', null,null,null,1,null);
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
    this.loginResponse = this.loginService.$loginStatus.subscribe(status => {
      if (status === 200) {
        this.router.navigateByUrl('shifts');
      } else {
        this.lastStatus = status;
      }
    });
  }
  validationClassesForUser(): string {
    if (this.userValid()) {
      return 'form-control is-valid col-12';
    } else {
      return 'form-control is-invalid col-12';
    }
  }
  validationClassesForPassword(): string {
    if (this.passwordValid()) {
      return 'form-control is-valid col-12';
    } else {
      return 'form-control is-invalid col-12'
    }
  }
  
  managerValid(): boolean {
    if( this.loginService.currentUser.role === 2){
        return true;
    }

}
}
