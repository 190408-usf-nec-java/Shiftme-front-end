import { Injectable } from '@angular/core';
import { WeekDays } from '../classes/WeekDays';
import { HttpClient } from '@angular/common/http';
import { ShiftConfig } from '../classes/ShiftConfig';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Env } from '../classes/env';
@Injectable({
  providedIn: 'root'
})
export class ShiftConfigService {
  private shiftConfigStatusSubject = new Subject<number>();
  public  $shiftStatus = this.shiftConfigStatusSubject.asObservable();

  constructor(private httpClient: HttpClient, private env: Env) { }

  postShiftConfig(payload: ShiftConfig) {
    console.log(payload);
    this.httpClient.post(this.env.getProdUrl() + '/config', payload, {
      observe: 'response',
      }).subscribe(response => {
        this.shiftConfigStatusSubject.next(200);
      }, err => {
        this.shiftConfigStatusSubject.next(err.status);
      });
  }
  }
