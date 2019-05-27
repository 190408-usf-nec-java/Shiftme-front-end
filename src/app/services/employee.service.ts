import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/classes/users';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Credentials } from '../classes/credentials';
import { Env } from '../classes/env';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  listUsers;

  constructor(private httpClient: HttpClient, private env: Env) { }

  getAllUsers() {
    this.httpClient.get(this.env.getProdUrl() + '/people', {
      observe: 'response'
    }).subscribe(response => {
      const user = JSON.stringify(response.body);
      this.listUsers = JSON.parse(user);
    }, err => {
      console.log(err);
    });
  }

  deleteUser(user): boolean {
    console.log(user);
    this.httpClient.delete(this.env.getProdUrl() + '/people/' + user.user_id, {
      observe: 'response'
    }).subscribe(response => {
      console.log(response.body);
      const index = this.listUsers.indexOf(user, 0);
      if (index > -1) {
        this.listUsers.splice(index, 1);
      }
      return true;
    }, err => {
      console.log(err);
      if (err.status === 403)
      {
        return false;
      }
    });
    return null;
  }

  createUser(cred: Credentials) {
    this.httpClient.post(this.env.getProdUrl() + '/cred/create', cred, {
      observe: 'response'
    }).subscribe(response => {
      const user = JSON.stringify(response.body);
      console.log(user);
      this.listUsers.push(JSON.parse(user));
    }, err => {
      console.log('Error thrown');
      console.log(err);
    });
  }
}
