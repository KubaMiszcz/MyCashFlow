import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plnPipe',
})
export class PlnPipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    if (!value) {
      return Math.round(value) + ' PLN';
    }
    return Math.round(value) + ' PLN';
  }
}
