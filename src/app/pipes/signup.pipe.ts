import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signup'
})
export class SignupPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
