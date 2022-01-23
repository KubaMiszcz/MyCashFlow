import { IIncome } from './../models/income.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-table',
  templateUrl: './cash-table.component.html',
  styleUrls: ['./cash-table.component.scss']
})
export class CashTableComponent implements OnInit {
  @Input() title = '';
  @Input() list: IIncome[] = [];

  get totalAmount(): number {
    let res = 0;
    this.list.forEach(e => res += e.value);
    return res;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
