import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Env {
    private ec2Url = 'http://ec2-34-201-46-35.compute-1.amazonaws.com:8081';
    getProdUrl(): string {
        return this.ec2Url;
    }
    constructor(){}
}
