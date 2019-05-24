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

  // token sha52, secure random byte array

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

  deleteUser(id: number): void {
    // const listUsers = JSON.parse(sessionStorage.getItem('users'));
    // user: User = listUsers.getItem(id);
    // this.httpClient.delete('http://localhost:8080/ex/' + user.id, {
    //   observe: 'response',
    //   }).subscribe(response => {
    //     this.loginStatusSubject.next(200);
    //     console.log('User successfully deleted!');
    // const index: number = listUsers.indexOf(user);
    // if (index !== -1) {
    //   listUsers.splice(index, 1);
    // }
    // sessionStorage.setItem('users', JSON.stringify(listUsers));

    //   }, err => {
    //     this.loginStatusSubject.next(err.status);
    //   });
    throw new Error('Method not implemented.');
  }

  createUser(cred: Credentials) {
    // const listUsers = JSON.parse(sessionStorage.getItem('users'));
    // user: User = listUsers.getItem(id);
    // this.httpClient.post('http://localhost:8080/addEmployee', JSON.stringify(user) {
    //   observe: 'response',
    //   }).subscribe(response => {
    //     this.loginStatusSubject.next(200);
    //     console.log('User successfully added!');
    // const index: number = listUsers.indexOf(user);
    // listUsers.push(user);
    // sessionStorage.setItem('users', JSON.stringify(listUsers));

    //   }, err => {
    //     this.loginStatusSubject.next(err.status);
    //   });
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
