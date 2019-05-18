import { Component, OnInit } from '@angular/core';
import { BuisnessPageService } from 'src/app/services/buisness-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buisness-page',
  templateUrl: './buisness-page.component.html',
  styleUrls: ['./buisness-page.component.css']
})
export class BuisnessPageComponent implements OnInit {

  businessName = '';
  city = '';
  address = '';
  state = 0;
  zipCode = 0;
  businessResponse: Subscription;
  lastStatus = 200;

  constructor(private buisnessPageService: BuisnessPageService) { }

  ngOnInit() {
    this.businessResponse = this.buisnessPageService.$businessStatus.subscribe(status => {
      if(status ===200){

      }else{
        this.lastStatus = status;
      }
    })
  }

  ngOnDestroy() {
    if (this.businessResponse) {
      this.businessResponse.unsubscribe();
    }
  }
  businessValid(): boolean {
    return this.businessName.length > 8;
  }
  
  cityValid(): boolean {
    return this.city.length > 4;
  }
  addressValid(): boolean {
    return this.address.length > 5;
  }

  submit() {
    this.buisnessPageService.business(this.businessName, this.city,this.address, this.state, this.zipCode);
  }
}
