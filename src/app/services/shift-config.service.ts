import { Injectable } from '@angular/core';
import { WeekDays } from '../classes/WeekDays';
import { HttpClient } from '@angular/common/http';
import { ShiftHours } from '../classes/ShiftConfig';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShiftConfigService {
  private shiftConfigStatusSubject = new Subject<number>();
  public  $shiftStatus = this.shiftConfigStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  postShiftConfig(payload: ShiftHours) {
    this.httpClient.post('http://localhost:8081/config', payload, {
      observe: 'response',
      }).subscribe(response => {
        this.shiftConfigStatusSubject.next(200);
        console.log('We made it');
      }, err => {
        this.shiftConfigStatusSubject.next(err.status);
      });
  }
  }
