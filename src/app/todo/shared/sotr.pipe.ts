import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {

  transform(value: Array<any>, args?: any): Array<any> {
    return value.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
