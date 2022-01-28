import { IncomeTypeEnum } from './../models/constants/income-type.enum';
import { ALL_EVENTS_LIST, IEvent, Event } from './../models/event.model';
import { IIncome } from './../models/income.model';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cash-table',
  templateUrl: './cash-table.component.html',
  styleUrls: ['./cash-table.component.scss']
})
export class CashTableComponent implements OnInit {
  @Input() title = '';
  @Input() list: IIncome[] = [];
  @Input() totalAmount = 0;
  @Output() rowClick = new EventEmitter<IIncome>();
  icomeTypes = IncomeTypeEnum;

  constructor() { }

  ngOnInit(): void { }

  onRowClick(value: IIncome) {
    this.rowClick.emit(value);
  }
}
