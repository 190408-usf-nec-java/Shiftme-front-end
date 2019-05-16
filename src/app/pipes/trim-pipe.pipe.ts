import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimPipe'
})
export class TrimPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.trim();
  }

}
