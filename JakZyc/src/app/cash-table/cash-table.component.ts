import { IIncome } from './../models/income.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-table',
  templateUrl: './cash-table.component.html',
  styleUrls: ['./cash-table.component.scss']
})
export class CashTableComponent implements OnInit {
  @Input() list: IIncome[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
