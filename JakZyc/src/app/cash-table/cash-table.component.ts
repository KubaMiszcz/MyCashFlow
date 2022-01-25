import { EVENT_LIST, IEvent, Event } from './../models/event.model';
import { IIncome } from './../models/income.model';
import { Component, Input, OnInit } from '@angular/core';
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
  relatedEvent: IEvent = new Event();

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    console.log(this.list);

  }

  selectItem(value: IIncome) {
    this.relatedEvent = EVENT_LIST.find(e => e.id === value.relatedEventId)!;// ?? new Event();
    console.log(this.relatedEvent);
  }










  closeResult: string;

  open(content: any, itemId?: number) {
    console.log(itemId);

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
