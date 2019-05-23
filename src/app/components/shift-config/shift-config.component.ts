import { Component, OnInit, Input} from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import {ShiftHours} from 'src/app/classes/ShiftConfig';
import {WeekDays} from 'src/app/classes/WeekDays';
import { ShiftConfigService } from 'src/app/services/shift-config.service';
@Component({
  selector: 'app-shift-config',
  templateUrl: './shift-config.component.html',
  styleUrls: ['./shift-config.component.css']
})
export class ShiftConfigComponent implements OnInit {
  @Input() shiftHours: ShiftHours = new ShiftHours(0, null, null, new WeekDays(false,false,false,false,false,false,false) , null);
  
  
  constructor(private loginService: LoginService, private shiftConfigService: ShiftConfigService) { }

  ngOnInit() {
   console.log(this.loginService.currentUser.role);
  }

  submit(){
    this.shiftHours.userId = this.loginService.currentUser.id;
    this.shiftConfigService.postShiftConfig(this.shiftHours);
    console.log(this.shiftHours);

  }

}
