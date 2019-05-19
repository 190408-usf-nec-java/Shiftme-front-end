import { Component, OnInit, HostListener } from '@angular/core';
import { Week } from 'src/app/classes/week';
import { ShiftService } from 'src/app/services/shift.service';
import { User } from 'src/app/classes/user';
import { Shift } from 'src/app/classes/shift';
import { Credentials } from 'src/app/classes/credentials';
import { Day } from 'src/app/classes/day';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {

  currentWeek: Week;
  currentDay = 0;
  currentDate;
  weekOrDay: string;
  constructor(private shiftService: ShiftService) { }

  ngOnInit() {
    const today = new Date(Date.now());
    const date = this.formartToUsableDate(today); //(today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    console.log(date);
    // this.shiftService.fetchCurrentWeekByDate(date);
    // this.currentWeek = this.shiftService.getCurrentWeek(); commented out until backend is working
    this.currentWeek = this.genSampleData();
    this.currentDate = date;
    if(this.isSmallScreen()){
      this.weekOrDay = 'Day';
    } else {
      this.weekOrDay = 'Week';
    }
  }
  isSmallScreen() {
    return window.innerWidth < 768;
  }
  isCurrentDay(day: number) {
    if (this.isSmallScreen()) {
      return day === this.currentDay;
    } else {
      return true;
    }
  }
  next() {
    if (this.isSmallScreen()) {
      if (this.currentDay === 6){
        this.shiftService.gotoNextWeek();
        this.currentWeek = this.shiftService.getCurrentWeek();
        this.currentDay = 0;
      } else {
        this.currentDay++;
      }
    } else {
      this.shiftService.gotoNextWeek();
      this.currentWeek = this.shiftService.getCurrentWeek();
    }
  }
  previous() {
    if (this.isSmallScreen()) {
      if (this.currentDay === 0) { // if we're on the first day of the week, get previous week;
        this.shiftService.gotoPreviousWeek();
        this.currentWeek = this.shiftService.getCurrentWeek();
        this.currentDay = 6;
      } else {
        this.currentDay--;
      }
    } else {
      this.shiftService.gotoPreviousWeek();
      this.currentWeek = this.shiftService.getCurrentWeek();
    }
  }
  formartToUsableDate(date: Date): string {
    const today = new Date(date);
    return (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
  }
  getHeight(shift: Shift): string {
    const height = ((shift.endTime - shift.startTime) / 24) * 100; // calculate percentage of day the shift is
    const hPercent = height + '%';
    return hPercent;
  }
  // 768 is small breakpoint for bootstrap



  genSampleData(): Week {
    const bob = new User('Bob', 'Sather', 'bobsather@gmail.com', 'employee', 1,
      new Credentials('billyboy', 'aoishgoihsgohap dhgap0sygsadgh', 'bobsath'));
    const martha = new User('Martha', 'Stuart', 'martha@margo.wiz', 'employee', 2,
      new Credentials('cookingiscool', 'aosihgoisahdpgoihaspdoigh', 'marthathecook'));
    const emps = new Array<User>(martha, bob);
    //const fShift = new Shift(8, 12, emps);
    //const sshift = new Shift(12, 16, emps);
    const tshift = new Shift(0, 6, emps);
    const shifts = new Array<Shift>(tshift);
    const monday = new Day(new Date('5/6/2019'), shifts);
    const tuesday = new Day(new Date('5/7/2019'), shifts);
    const wednesday = new Day(new Date('5/8/2019'), shifts);
    const thursday = new Day(new Date('5/9/2019'), shifts);
    const friday = new Day(new Date('5/10/2019'), shifts);
    const saturday = new Day(new Date('5/11/2019'), shifts);
    const sunday = new Day(new Date('5/12/2019'), shifts);
    const days = new Array<Day>(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    const week = new Week(days, 1, new Date(days[0].date));
    return week;
  }

}
