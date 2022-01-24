import { EVENT_LIST, IEvent, Event } from './../models/event.model';
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
  relatedEvent = new Event();

  constructor() { }

  ngOnInit(): void {
    console.log(this.list);

  }

  selectItem(value: IIncome) {
    this.relatedEvent = EVENT_LIST.find(e => e.id === value.relatedEventId) ?? new Event();
    console.log(this.relatedEvent);
  }

}
