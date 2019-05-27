import { Component, OnInit, Input} from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import {ShiftConfig} from 'src/app/classes/ShiftConfig';
import {WeekDays} from 'src/app/classes/WeekDays';
import { ShiftConfigService } from 'src/app/services/shift-config.service';
import { Users } from 'src/app/classes/users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shift-config',
  templateUrl: './shift-config.component.html',
  styleUrls: ['./shift-config.component.css']
})
export class ShiftConfigComponent implements OnInit {
  @Input() shiftConfig: ShiftConfig = new ShiftConfig(null, null, null, new WeekDays(false, false, false, false, false, false, false) , null);
  
  sampleUser;
  
  constructor(private loginService: LoginService, private router: Router ,private shiftConfigService: ShiftConfigService) { }

  ngOnInit() {
   console.log(this.loginService.currentUser.role);
    if (!this.loginService.getLoggedIn()) {
      this.router.navigateByUrl('login');
    }
   console.log(this.loginService.currentUser.firstName);
    this.sampleUser = new Users('Monty', 'Python', 'monty@python.org', 1, 1);
  }

  submit() {
    this.shiftConfig.users = this.sampleUser;
    this.shiftConfigService.postShiftConfig(this.shiftConfig);
  }

}
