import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plnPipe',
})
export class PlnPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) {
      return value + ' PLN';
    }
    return value + ' PLN';
  }
}
