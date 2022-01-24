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
  @Input() totalAmount = 0;

  constructor() { }

  ngOnInit(): void { }

}
