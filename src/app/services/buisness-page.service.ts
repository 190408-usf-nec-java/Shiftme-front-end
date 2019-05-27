import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuisnessPageService {
  private businessStatusSubject = new Subject<number>();
  public  $businessStatus = this.businessStatusSubject.asObservable();
  constructor(private httpClient: HttpClient) { }

  business(businessName: string, city: string, address: string, state: number, zipCode: number): Observable<any> {
    const payload = {
      businessName: businessName,
      city: city,
      address: address,
      state: state,
      zipCode: zipCode
    };

    return this.httpClient.post('http://localhost:8080/ex/business', payload)
}
}
