import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({

  selector: 'app-navigation',

  templateUrl: './navigation.component.html',

  styleUrls: ['./navigation.component.css']

})

export class NavigationComponent implements OnInit {


  constructor(private cookieService: CookieService, private loginService: LoginService, private router: Router) { }



  isCollapsed = false;



  ngOnInit() {

  }

  managerValid(): boolean {

      if (this.cookieService.get('role') === '2') {
          return true;
      }
  }

  logOut() {
    this.loginService.currentUser = null;
    console.log('Logged off');
    this.loginService.logOff();
  }

}
