import { Injectable } from '@angular/core';
import { Week } from '../classes/week';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Users } from '../classes/users';
import { Credentials } from '../classes/credentials';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  private currentWeek: Week;
  private nextWeek: Week;
  private previousWeek: Week;
  private employees: Array<Users>;
  private shiftStatusSubject = new Subject<number>();
  public  $shiftStatus = this.shiftStatusSubject.asObservable();
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
  public fetchCurrentWeekByUser(id: number) {
    this.httpClient.get(`http://localhost:8081/week/${id}`, {
      observe: 'response',
    }).pipe(map(response => response.body as Week))
    .subscribe(response => {
      this.currentWeek = response;
      console.log('Shift service: ');
      console.log(this.currentWeek);
      this.shiftStatusSubject.next(200);
    }, err => {
      this.shiftStatusSubject.next(err.status);
    });
  }
  private fetchPreviousWeek(currentWeek: Week) {
    this.httpClient.get(`http://localhost:8080/week/${currentWeek.startDate}`, {
      observe: 'response',
    }).pipe(map(response => response.body as Week))
    .subscribe(response => {
      this.shiftStatusSubject.next(200);
      this.previousWeek = response;
    }, err => {
      this.shiftStatusSubject.next(err.status);
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
    const bobCred = new Credentials('billyboy', 'aoishgoihsgohap dhgap0sygsadgh', 'bobsath');
    const bob = new Users('Bob', 'Sather', 'bobsather@gmail.com', 'employee', 1, bobCred);
    const martha = new Users('Martha', 'Stuart', 'martha@margo.wiz', 'employee', 2,
      new Credentials('cookingiscool', 'aosihgoisahdpgoihaspdoigh', 'marthathecook'));
    const monty = new Users('Monty', 'Python', 'monty@python.com', 'employee', 3,
      new Credentials('hamsterparty', 'aosihgoisahdpgoihaspdoigh', 'montypython'));
    const james = new Users('James', 'Bond', 'bonejamesbond@bond.com', 'employee', 4,
      new Credentials('shakennotstirred', 'aosihgoisahdpgoihaspdoigh', 'jamesbond'));
    this.employees = new Array<Users>(bob, martha, monty, james);
  }
}
