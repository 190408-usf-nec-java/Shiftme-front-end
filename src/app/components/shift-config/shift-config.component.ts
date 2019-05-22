import { Component, OnInit, Input} from '@angular/core';
import{LoginService} from 'src/app/services/login.service';
import{ShiftHours} from 'src/app/classes/ShiftHours';
import{WeekDays} from 'src/app/classes/WeekDays';
@Component({
  selector: 'app-shift-config',
  templateUrl: './shift-config.component.html',
  styleUrls: ['./shift-config.component.css']
})
export class ShiftConfigComponent implements OnInit {
  @Input() shiftHours: ShiftHours = new ShiftHours(null,null,new WeekDays(false,false,false,false,false,false,false),null,null);
  
  
  constructor(private loginService:LoginService) { }

  ngOnInit() {
   console.log(this.loginService.currentUser.firstname);
  }

  submit(){
    this.shiftHours.id = this.loginService.currentUser.id;
    this.shiftHours.numberOfEmployees;

    console.log(this.shiftHours);

  }

}
