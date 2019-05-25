import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';



@Component({

  selector: 'app-navigation',

  templateUrl: './navigation.component.html',

  styleUrls: ['./navigation.component.css']

})

export class NavigationComponent implements OnInit {


  constructor(private cookieService: CookieService) { }



  isCollapsed = false;



  ngOnInit() {

  }

  managerValid(): boolean {

      if (this.cookieService.get('role') === '2') {
          return true;
      }
  }


}