import _ from 'lodash';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  sumValues(list: { value: number }[]) {
    return list.reduce((sum, current) => sum + current.value, 0);
  }

  sumProperties(list: any[], propName: string) {
    return list.reduce((sum, current) => sum + current[propName], 0);
  }

  sumValuesWithLodash_CHECKIFWORKS(list: { value: number }[]): number {
    return _.sumBy(list, (day) => day.value);
  }

  removeFromArrayByProp<T>(array: T[], propName: string, value: any): T[] {
    const list = _.reject(array, { [propName]: value }) as T[];

    return list;
  }

  getRandomWithPrecision(min: number, max: number, precision?: number) {
    let res = _.random(min, max);
    if (precision && precision > 0) {
      res = (Math.round(res * precision * 10)) / 10;
    }

    console.log('sdsd');

    return res;
  }
}
