import { Component, OnInit } from '@angular/core';
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
  constructor(private shiftService: ShiftService) { }

  ngOnInit() {
    let today = new Date(Date.now());
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
    console.log(date);
    this.shiftService.fetchCurrentWeek(date);
    // this.currentWeek = this.shiftService.getCurrentWeek();
    this.currentWeek = this.genSampleData();

  }








  genSampleData(): Week {
    const bob = new User('Bob', 'Sather', 'bobsather@gmail.com', 'employee', 1,
      new Credentials('billyboy', 'aoishgoihsgohap dhgap0sygsadgh', 'bobsath'));
    const martha = new User('Martha', 'Stuart', 'martha@margo.wiz', 'employee', 2,
      new Credentials('cookingiscool', 'aosihgoisahdpgoihaspdoigh', 'marthathecook'));
    const emps = new Array<User>(martha, bob);
    const fShift = new Shift(8, 12, emps);
    const sshift = new Shift(12, 4, emps);
    const shifts = new Array<Shift>(fShift, sshift);
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
