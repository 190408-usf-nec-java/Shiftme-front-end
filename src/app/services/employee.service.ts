import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../classes/users';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Credentials } from '../classes/credentials';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  listUsers: Array<Users> = [];

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    this.httpClient.get('http://localhost:8081/people', {
      observe: 'response'
    }).subscribe(response => {
      const user = JSON.stringify(response.body);
      console.log(user);
      this.listUsers = JSON.parse(user);
    }, err => {
      console.log(err);
    });
  }

  deleteUser(user: Users): void {
    this.httpClient.delete('http://localhost:8081/people/' + user.user_id, {
      observe: 'response'
    }).subscribe(response => {
      console.log(response.body);
      const index = this.listUsers.indexOf(user, 0);
      if (index > -1) {
        this.listUsers.splice(index, 1);
      }
    }, err => {
      console.log(err);
    });
  }

  createUser(cred: Credentials) {
    console.log(cred);
    this.httpClient.post('http://localhost:8081/cred/create', cred, {
      observe: 'response'
    }).subscribe(response => {
      const user = JSON.stringify(response.body);
      console.log(user);
      this.listUsers.push(JSON.parse(user));
    }, err => {
      console.log(err);
    });
  }
}
