import { Injectable } from '@angular/core';
import { User } from '../classes/WeekDays';
@Injectable({
  providedIn: 'root'
})
export class ShiftConfigService {
  
  startTime: number;
  endTime: number;
  weekDays: number;
  weekDays:WeekDays;

  constructor(private httpClient:HttpClient) { }
}
