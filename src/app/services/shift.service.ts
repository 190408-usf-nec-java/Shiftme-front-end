import { Injectable } from '@angular/core';
import { Week } from '../classes/week';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  private currentWeek: Week;
  constructor(private httpClient: HttpClient) { }
  fetchNextWeek(prevWeek: Week): void {
    this.httpClient.get(`http://localhost:8080/week/${prevWeek.id}`, {
      observe: 'response',
    }).pipe(map(response => response.body as Week))
    .subscribe(response => {
      // this.loginStatusSubject.next(200);
      this.currentWeek = response;
    }, err => {
      // this.loginStatusSubject.next(err.status);
    });
  }
  fetchCurrentWeek(date: string) {
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
  getCurrentWeek(): Week{
    return this.currentWeek;
  }
}
