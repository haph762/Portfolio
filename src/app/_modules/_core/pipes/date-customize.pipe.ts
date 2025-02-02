import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCustomize'
})
export class DateCustomizePipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    if (value) {
      let d = new Date(value).getDate();
      let m = new Date(value).getMonth() + 1;
      let y = new Date(value).getFullYear();
      return `Ngày: ${d}, tháng ${m}, năm: ${y}`;
    }
    return `Không phải định dạng ngày`;
  }

}
