import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username = '';
  password = '';
  passwordConfirmation = '';
  loginAttemptSucceeded = undefined;
  signUpResponse: Subscription;
  lastStatus = 200;

  constructor(private signupService: SignupService) { }

  ngOnInit() {
    this.signUpResponse = this.signupService.$signUpStatus.subscribe(status => {
      if (status === 200) {

      } else {
        this.lastStatus = status;
      }
    });
  }

  ngOnDestroy() {
    if (this.signUpResponse) {
      this.signUpResponse.unsubscribe();
    }
  }

  formValidation(): boolean {
    this.usernameTrim();
    return this.passwordLengthValidation() &&
            this.passwordsMatch() &&
            this.usernameLengthValidation();
  }

  passwordLengthValidation(): boolean {
    return this.password.length >= 8;
  }

  passwordsMatch(): boolean {
    return this.password === this.passwordConfirmation;
  }

  usernameLengthValidation(): boolean {
    return this.username.length >= 5;
  }

  usernameTrim(): void {
    this.username = this.username.trim();
  }

  submit() {
    this.signupService.signup(this.username, this.password).subscribe( result => {
      this.loginAttemptSucceeded = true;
    }, error => {
      this.loginAttemptSucceeded = false;
    });
  }
}
