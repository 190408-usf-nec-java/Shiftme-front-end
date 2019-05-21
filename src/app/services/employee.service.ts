import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private loginStatusSubject = new Subject<number>();
  public $loginStatus = this.loginStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

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

  createUser() {
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
    throw new Error('Method not implemented.');
  }
}