import { Injectable } from '@angular/core';
import { Week } from '../classes/week';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Users } from '../classes/users';
import { Credentials } from '../classes/credentials';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  private currentWeek: Week;
  private nextWeek: Week;
  private previousWeek: Week;
  private employees: Array<Users>;
  constructor(private httpClient: HttpClient) { }

  private fetchNextWeek(currentWeek: Week): void {
    this.httpClient.get(`http://localhost:8080/week/${currentWeek.startDate}`, {
      observe: 'response',
    }).pipe(map(response => response.body as Week))
    .subscribe(response => {
      // this.loginStatusSubject.next(200);
      this.nextWeek = response;
    }, err => {
      // this.loginStatusSubject.next(err.status);
    });
  }
  // This method is only run on component init
  public fetchCurrentWeekByDate(date: string) {
    this.httpClient.get(`http://localhost:8080/week/${date}`, {
      observe: 'response',
    }).pipe(map(response => response.body as Week))
    .subscribe(response => {
      // this.loginStatusSubject.next(200);
      this.currentWeek = response;
    }, err => {
      // this.loginStatusSubject.next(err.status);
    });
  }
  private fetchPreviousWeek(currentWeek: Week) {
    this.httpClient.get(`http://localhost:8080/week/${currentWeek.startDate}`, {
      observe: 'response',
    }).pipe(map(response => response.body as Week))
    .subscribe(response => {
      // this.loginStatusSubject.next(200);
      this.previousWeek = response;
    }, err => {
      // this.loginStatusSubject.next(err.status);
    });
  }
  public getCurrentWeek(): Week{
    return this.currentWeek;
  }
  // Iterates through saved weeks forwards
  public gotoNextWeek(): void {
    this.previousWeek = this.currentWeek;
    this.currentWeek = this.nextWeek;
    this.fetchNextWeek(this.currentWeek); // this method sets nextweek
  }
  // Iterates through saved weeks backwords
  public gotoPreviousWeek(): void {
    this.nextWeek = this.currentWeek;
    this.currentWeek = this.previousWeek;
    this.fetchPreviousWeek(this.currentWeek); // this method sets previous week;
  }
  public getEmployees(): Array<Users> {
    return this.employees;
  }
  public setEmployees(): void {
    const bob = new Users('Bob', 'Sather', 'bobsather@gmail.com', -1, 1);
    const martha = new Users('Martha', 'Stuart', 'martha@margo.wiz', -1, 2);
    const monty = new Users('Monty', 'Python', 'monty@python.com', -1, 3);
    const james = new Users('James', 'Bond', 'bonejamesbond@bond.com', -1, 4);
    this.employees = new Array<Users>(bob, martha, monty, james);
  }
}
