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

  @Input() shiftConfig: ShiftConfig = new ShiftConfig(null, null, null,
                                      new WeekDays(false, false, false, false, false, false, false) , null);

  constructor(private loginService: LoginService, private router: Router, private shiftConfigService: ShiftConfigService) { }

  ngOnInit() {
   if (!this.loginService.getLoggedIn()) {
      this.router.navigateByUrl('login');
    }
  }

  submit() {
    this.shiftConfig.users = this.loginService.currentUser;
    this.shiftConfigService.postShiftConfig(this.shiftConfig);
  }

}
