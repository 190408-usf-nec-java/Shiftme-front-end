import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/classes/users';
import { Credentials } from 'src/app/classes/credentials';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() user: Users = new Users('', '', '', -1, -1);
  @Input() username = '';
  @Input() password = '';
  @Input() passwordConfirmation = '';

  constructor(private employeeService: EmployeeService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (!this.loginService.getLoggedIn()) {
      this.router.navigateByUrl('login');
    }
  }

  sampleUserSubmit() {
    const deleteMe: Credentials = new Credentials('cmCM11!!1', '', 'charlesManson', new Users('Charles', 'Manson', 'cm@hotmail.com', 1, -1));
    this.employeeService.createUser(deleteMe);
    this.router.navigateByUrl('employee');
  }

  onSubmit() {
    const credentials: Credentials = new Credentials(this.password, '', this.username, this.user);
    this.employeeService.createUser(credentials);
    this.router.navigateByUrl('employee');
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
}
