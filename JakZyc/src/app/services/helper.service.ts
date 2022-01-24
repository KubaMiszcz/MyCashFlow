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

  sumValuesWithLodash(list: { value: number }[]): number {
    return _.sumBy(list, function (day) {
      return day.value;
    });
  }
}
