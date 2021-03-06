import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/classes/users';
import { Credentials } from 'src/app/classes/credentials';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private httpClient: HttpClient, private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    if (!this.loginService.getLoggedIn()) {
      this.router.navigateByUrl('login');
    }
    this.employeeService.getAllUsers();
  }
  delete(user) {
    this.employeeService.deleteUser(user);
    this.router.navigateByUrl('employee');
  }

  create() {
    this.router.navigateByUrl('employee-create');
  }
}
