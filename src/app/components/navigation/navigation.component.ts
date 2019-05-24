import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';



@Component({

  selector: 'app-navigation',

  templateUrl: './navigation.component.html',

  styleUrls: ['./navigation.component.css']

})

export class NavigationComponent implements OnInit {


  constructor(private loginService:LoginService) { }



  isCollapsed = false;



  ngOnInit() {

  }

  managerValid(): boolean {
      if( this.loginService.currentUser.role === 2){
          return true;
      }
  }


}