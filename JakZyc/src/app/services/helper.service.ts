import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  sumValues(list: { value: number }[]) {
    return list.reduce((sum, current) => sum + current.value, 0);
  }

}
