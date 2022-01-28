import { IPlayer } from './../models/player.model';
import { DialogResultEnum } from './../models/constants/dialog-result.enum';
import { EventTypeEnum } from './../models/constants/event-type.enum';
import { IEvent, Event, ALL_EVENTS_LIST } from '../models/event.model';
import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../services/game.service';
import { GameSettingsService } from '../services/game-settings.service';

@Component({
  selector: 'app-info-card-modal',
  templateUrl: './info-card-modal.component.html',
  styleUrls: ['./info-card-modal.component.scss']
})
export class InfoCardModalComponent implements OnInit {
  eventInfo: IEvent = new Event();

  @Output() payLoan = new EventEmitter<number>();

  @ViewChild('infoCardModal') infoCardModal: any;

  private modalRef: NgbModalRef;

  private player: IPlayer;

  constructor(
    private gameService: GameService,
    private modalService: NgbModal,
    private gameSettingsService: GameSettingsService,

  ) { }

  ngOnInit(): void {
    this.gameService.showInfoCardE$.subscribe(value => {
      this.eventInfo = ALL_EVENTS_LIST.find(e => e.id === value.relatedEventId)!;// ?? new Event();;
      this.showModal();
    })

    this.gameService.player$.subscribe(p => this.player = p);
  }

  showModal() {
    this.modalRef = this.modalService.open(this.infoCardModal, { ariaLabelledBy: 'modal-basic-title' });
  }

  onPayLoan() {
    this.payLoan.emit(this.eventInfo.id);
    this.modalRef.close();
  }

  hasEventLoan() {
    return !!this.player.expenses.find(e => e.relatedEventId === this.eventInfo.id);
  }

  isPayable() {
    let relatedIncome = this.player.expenses.find(e => e.relatedEventId === this.eventInfo.id)
    let hasEventLoan = !!relatedIncome;
    let loanValue = relatedIncome?.value;
    // let isPayable = relatedIncome?.value < this.player.totalCash * this.gameSettingsService.personalExpensesRate;
    // return
  }
}
