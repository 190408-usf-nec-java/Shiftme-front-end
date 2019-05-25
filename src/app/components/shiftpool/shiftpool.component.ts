import { Component, OnInit, TemplateRef } from '@angular/core';
import { Week } from 'src/app/classes/week';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Users } from 'src/app/classes/users';
import { Shift } from 'src/app/classes/shift';
import { ShiftService } from 'src/app/services/shift.service';
import { Day } from 'src/app/classes/day';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Credentials } from 'src/app/classes/credentials';

@Component({
  selector: 'app-shiftpool',
  templateUrl: './shiftpool.component.html',
  styleUrls: ['./shiftpool.component.css']
})
export class ShiftpoolComponent implements OnInit {
  currentWeek: Week;
  currentDay = 0;
  currentDate;
  weekOrDay: string;
  modalRef: BsModalRef;
  config = {
    backdrop: false
  };
  isEditMode = false;
  clickedShift: Shift;
  currentEmployees: Array<Credentials>;
  weekdays = new Array<string>();
  isitChanged: boolean;

  constructor(private shiftService: ShiftService, private modalService: BsModalService, private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    if (!this.loginService.getLoggedIn()) {
      this.router.navigateByUrl('login');
    }
    const today = new Date(Date.now());
    const date = this.formartToUsableDate(today);
    console.log(date);
    // this.shiftService.fetchCurrentWeekByDate(date);
    // this.currentWeek = this.shiftService.getCurrentWeek(); commented out until backend is working
    // this.currentWeek = this.formatShiftsForDisplay(this.genSampleData());
    this.currentWeek = this.generateFillerShifts(this.currentWeek);
    this.currentDate = date;

    this.currentWeek.days.forEach( day => {
      this.weekdays.push(this.formartToUsableDate(day.date));
    });
    if (this.isSmallScreen()) {
      this.weekOrDay = 'Day';
    } else {
      this.weekOrDay = 'Week';
    }
    this.shiftService.setEmployees();
    this.currentEmployees = this.shiftService.getEmployees();
    console.log(this.currentEmployees);
  }
  openModal(template: TemplateRef<any>, shift: Shift) {
    this.clickedShift = shift;
    if (!shift.isEmptyShift) {
      this.modalRef = this.modalService.show(template, this.config);
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
      if (this.currentDay === 6) {
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
    const height = ((shift.endHour - shift.startHour) / 24) * 100; // calculate percentage of day the shift is
    const hPercent = height + '%';
    return hPercent;
  }
  formatShiftsForDisplay(week: Week): Week {
    week.days.forEach( day => {
      day.shifts = day.shifts.sort((a, b) => a.startHour - b.startHour);
    });
    return week;
  }
  generateFillerShifts(week: Week): Week {
    const blankShift = new Shift(0, 0, 1, null, 0, true);
    week.days.forEach(day => {
      const emptyShifts = new Array<Shift>();
      if (day.shifts !== undefined) {
        if (day.shifts[0].startHour !== 0) {
          emptyShifts.push(new Shift(0, 0, day.shifts[0].startHour, null, 0, true));
        }
      }
      if (day.shifts !== undefined) {
        for (let i = 1; i < day.shifts.length; i++) {
          if (day.shifts[i - 1].endHour !== day.shifts[i].startHour) {
            emptyShifts.push(new Shift(0, day.shifts[i - 1].endHour, day.shifts[i].startHour, null, 0, true));
          }
        }
      }
      emptyShifts.forEach(shift => {
        day.shifts.push(shift);
      });
    });
    console.log(week.days);
    week = this.formatShiftsForDisplay(week);
    return week;
  }
  isManager(): boolean {
    return true;
  }
  isitEditMode(): boolean {
    return this.isEditMode;
  }
  changeEmployee($event): void {
    for (const employee of this.currentEmployees) {
      if (employee.username === $event.target.value) {
        this.clickedShift.employees.push(employee);
      }
    }
    this.isitChanged = true;
  }
  employeeIsAlreadyAssigned(user: Credentials): string {
    for (const i of this.clickedShift.employees) {
      if (i.username === user.username) {
        return 'none';
      }
    }
    return 'block';
  }
  edit() {
    this.isEditMode = true;
  }
  save() {
    this.isEditMode = false;
  }
  delete(username: string) {
    for (const employee of this.currentEmployees) {
      if (employee.username === username) {
        const index = this.clickedShift.employees.indexOf(employee);
        console.log(this.clickedShift.employees);
        console.log(index);
        this.clickedShift.employees.splice(index, 1);
      }
    }
  }
  isChanged(): boolean {
    return this.isitChanged;
  }
  // 768 is small breakpoint for bootstrap



  /*genSampleData(): Week {
    let bob = new Users('Bob', 'Sather', 'bobsather@gmail.com', 'employee', 1,
      new Credentials('billyboy', 'aoishgoihsgohap dhgap0sygsadgh', 'bobsath'));
    let martha = new Users('Martha', 'Stuart', 'martha@margo.wiz', 'employee', 2,
      new Credentials('cookingiscool', 'aosihgoisahdpgoihaspdoigh', 'marthathecook'));
    let monty = new Users('Monty', 'Python', 'monty@python.com', 'employee', 3,
      new Credentials('hamsterparty', 'aosihgoisahdpgoihaspdoigh', 'montypython'));
    let james = new Users('James', 'Bond', 'bonejamesbond@bond.com', 'employee', 4,
      new Credentials('shakennotstirred', 'aosihgoisahdpgoihaspdoigh', 'jamesbond'));
    let emps = new Array<Users>(martha, bob);
    let emps2 = new Array<Users>(monty, james);
    let fShift = new Shift(1, 9, 12, emps, 2);
    let nshift = new Shift(3, 3, 16, emps2, 2);
    let sshift = new Shift(2, 17, 20, emps2, 2);
    let tshift = new Shift(0, 1, 9, emps, 2);
    let shifts1 = new Array<Shift>(sshift, fShift, tshift);
    let shifts2 = new Array<Shift>(nshift);
    let shifts3 = new Array<Shift>(sshift, fShift, tshift);
    let shifts4 = new Array<Shift>(nshift);
    let shifts5 = new Array<Shift>(sshift, fShift, tshift);
    let shifts6 = new Array<Shift>(sshift, fShift, tshift);
    let shifts7 = new Array<Shift>(sshift, fShift, tshift);
    let monday = new Day(new Date('5/6/2019'), shifts6);
    let tuesday = new Day(new Date('5/7/2019'), shifts5);
    let wednesday = new Day(new Date('5/8/2019'), shifts3);
    let thursday = new Day(new Date('5/9/2019'), shifts7);
    let friday = new Day(new Date('5/10/2019'), shifts1);
    let saturday = new Day(new Date('5/11/2019'), shifts2);
    let sunday = new Day(new Date('5/12/2019'), shifts4);
    let days = new Array<Day>(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    let week = new Week(days, 1, new Date(days[0].date));
    return week;
  }*/
}
