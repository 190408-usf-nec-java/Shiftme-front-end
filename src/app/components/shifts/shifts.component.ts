import { Component, OnInit, HostListener, TemplateRef } from '@angular/core';
import { Week } from 'src/app/classes/week';
import { ShiftService } from 'src/app/services/shift.service';
import { Users } from 'src/app/classes/users';
import { Shift } from 'src/app/classes/shift';
import { Credentials } from 'src/app/classes/credentials';
import { Day } from 'src/app/classes/day';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {
  loaded = false;
  currentWeek: Week;
  daysAsList: Array<Day> = [];
  currentDay = 0;
  currentDate;
  weekOrDay: string;
  modalRef: BsModalRef;
  config = {
    backdrop: false
  };
  isEditMode = false;
  clickedShift: Shift;
  currentEmployees: Array<Credentials> = [];
  weekdays = new Array<string>();
  isitChanged: boolean;

  constructor(private shiftService: ShiftService, private modalService: BsModalService, private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    if (!this.loginService.getLoggedIn()) {
      this.router.navigateByUrl('login');
    }
    const today = new Date(Date.now());
    const date = this.formartToUsableDate(today);
    this.currentDate = date;
    if (this.isSmallScreen()) {
      this.weekOrDay = 'Day';
    } else {
      this.weekOrDay = 'Week';
    }
    this.currentWeek = this.genSampleData();
    // this.daysAsList = this.convertToArray(this.currentWeek.days);
    this.shiftService.fetchCurrentWeekByUser(2);
    this.shiftService.$shiftStatus.subscribe( status => {
      if (status === 200) {
        this.loaded = true;
        this.populateShifts();
      } else {
      }
    });
    // this.currentWeek = this.formatShiftsForDisplay(this.genSampleData());
  }
  populateShifts() {
    this.currentWeek = this.shiftService.getCurrentWeek();
    this.daysAsList = this.convertToArray(this.currentWeek.days);
    this.daysAsList = this.generateFillerShifts(this.daysAsList);

    this.daysAsList.forEach( day => {
      this.weekdays.push(this.formartToUsableDate(day.date));
    });
    this.shiftService.setEmployees();
    this.currentEmployees = this.shiftService.getEmployees();
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
    const height = ((shift.endHour - shift.startHour) / 24) * 100; // calculate percentage of day the shift is
    const hPercent = height + '%';
    return hPercent;
  }
  formatShiftsForDisplay(days: Array<Day>): Array<Day> {
    days.forEach( day => {
      day.shifts = day.shifts.sort((a, b) => a.startHour - b.startHour);
    });
    return days;
  }
  generateFillerShifts(days: Array<Day>): Array<Day> {
    days.forEach(day => {
      const emptyShifts = new Array<Shift>();
      if (day.shifts !== undefined) {
        if (day.shifts[0].startHour !== 0){
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
    days = this.formatShiftsForDisplay(days);
    return days;
  }
  isManager(): boolean {
    return true;
  }
  isitEditMode(): boolean {
    return this.isEditMode;
  }
  isLoaded(): boolean {
    return this.loaded;
  }
  changeEmployee($event): void {
    if (this.clickedShift.employees === null){
      this.clickedShift.employees = new Array<Credentials>();
    }
    for (const employee of this.currentEmployees) {
      if (employee.username === $event.target.value) {
        this.clickedShift.employees.push(employee);
      }
    }
    this.isitChanged = true;
  }

  employeeIsAlreadyAssigned(user: Credentials): string {
    if(this.clickedShift.employees !== null){
        for (const i of this.clickedShift.employees) {
        if (i.username === user.username) {
          return 'none';
        }

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
        this.clickedShift.employees.splice(index, 1);
      }
    }
  }
  isChanged(): boolean {
    return this.isitChanged;
  }
  convertToArray(map: any) {
    let array = new Array<Day>();
    Object.getOwnPropertyNames(map).forEach(day => {
      array.push(map[day]);
    });
    //array.push(map.get('MONDAY'));
    //array.push(map.get('TUESDAY'));
    return array;
  }
  convertToMap(array: Array<Day>, map: any) {
    let i = 0;
    Object.getOwnPropertyNames(map).forEach(day => {
      if (i < array.length) {
        //console.log(map[array[i].name]);
        // map[array[i].name] = array[i];
        map[array[i].name] = array[i];
        i++;
      }
    });
    //console.log(map);
    return map;
  }
  submitWeek() {
    let days = this.convertToMap(this.daysAsList, this.currentWeek.days);
    this.currentWeek.days = days;
    this.shiftService.sendUpdatedWeek(this.currentWeek);
  }
  genSampleData(): Week {
    let week = new Week(/*days*/ null, 1, new Date(Date.now()));
    return week;
  }

}
