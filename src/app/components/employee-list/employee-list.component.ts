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

  replaceMe: Users[];

  constructor(private employeeService: EmployeeService, private httpClient: HttpClient, private router: Router, 
              private loginService: LoginService) { }

  ngOnInit() {
    // const userList: User[] = JSON.parse(sessionStorage.getItem('users'));
    if (!this.loginService.getLoggedIn()) {
      this.router.navigateByUrl('login');
    }
    this.replaceMe = [
      new Users(
        'Humberto',
        'Dio',
        'hdio@hotmail.com',
        'Good looks',
        666,
        new Credentials('yoMama', 'yoMamasMama', 'hdio')
      ),

      new Users(
        'Nope',
        'Nada',
        'nothing@hotmail.com',
        'Nihilist',
        0,
        new Credentials('noValue', 'noWorth', 'noTruth')
      ),

      new Users(
        'Three',
        'Is',
        'perfect@hotmail.com',
        'number',
        3,
        new Credentials('trinity', 'triumvirate', 'threeLayeredCake')
      )
    ];

    this.replaceMe.push(JSON.parse(sessionStorage.getItem('newUser')));


  }
  delete(user: Users) {
    // this.employeeService.deleteUser(user.id);

    // Delete this
    const index: number = this.replaceMe.indexOf(user);
    if (index !== -1) {
      this.replaceMe.splice(index, 1);
    }
  }

  create() {
    this.router.navigateByUrl('employee-create');
  }
}
