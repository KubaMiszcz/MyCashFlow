import { IIncome } from './../models/income.model';
import { IPlayer } from './../models/player.model';
import { DialogResultEnum } from './../models/constants/dialog-result.enum';
import { EventTypeEnum } from './../models/constants/event-type.enum';
import { IEvent, Event, ALL_EVENTS_LIST } from '../models/event.model';
import { Component, OnInit, Output, ViewChild, EventEmitter, Input, OnDestroy } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../services/game.service';
import { GameSettingsService } from '../services/game-settings.service';
import { IncomeTypeEnum } from '../models/constants/income-type.enum';

@Component({
  selector: 'app-info-card-modal',
  templateUrl: './info-card-modal.component.html',
  styleUrls: ['./info-card-modal.component.scss']
})
export class InfoCardModalComponent implements OnInit {
  eventInfo: IEvent = new Event();

  @Output() payLoan = new EventEmitter<IEvent>();

  @ViewChild('infoCardModal') infoCardModal: any;

  hasEventLoan = false;
  isLoanPayable = false;
  payLoanButtonLabel = '';


  private player: IPlayer;
  private modalRef: NgbModalRef;


  constructor(
    private gameService: GameService,
    private modalService: NgbModal,
    private gameSettingsService: GameSettingsService,

  ) { }

  ngOnInit(): void {
    this.gameService.showInfoCardE$.subscribe(income => {
      this.eventInfo = ALL_EVENTS_LIST.find(e => e.id === income.relatedEventId)!;// ?? new Event();
      console.log(this.eventInfo);

      if (income.type === IncomeTypeEnum.Loan) {
        this.hasEventLoan = true;
        this.isLoanPayable = this.getIsLoanPayable(income);
        this.payLoanButtonLabel = this.getPayLoanButtonLabel(income);
      }
      this.showModal();
    })

    console.log('InfoCardModalComponent');

    this.gameService.player$.subscribe(p => this.player = p);
  }

  showModal() {
    this.modalRef = this.modalService.open(this.infoCardModal, { ariaLabelledBy: 'modal-basic-title' });
  }

  onPayLoan() {
    this.payLoan.emit(this.eventInfo);
    this.modalRef.close();
  }

  closeModal(value: any) {
    this.modalRef.close();
  }




  // private refreshLoanProperties(income: IIncome) {
  //   this.hasEventLoan = this.getHasEventLoan(income);
  //   this.isLoanPayable = this.getIsLoanPayable(income);
  //   this.payLoanButtonLabel = this.getPayLoanButtonLabel(income);
  // }

  // private getRelatedExpense(){
  //   return this.player.expenses.find(e => e.relatedEventId === this.eventInfo.id)
  // }

  // private getHasEventLoan() {
  //   return !!this.player.expenses.find(e => e.relatedEventId === this.eventInfo.id);
  // }

  private getIsLoanPayable(income: IIncome): boolean {
    let loanValue = Math.abs(income?.value! * income.duration!);
    let availableCash = this.player.totalCash * (1 - this.gameSettingsService.personalExpensesRate);
    // let relatedIncome = this.player.expenses.find(e => e.relatedEventId === this.eventInfo.id)
    return availableCash > loanValue;
  }

  private getPayLoanButtonLabel(income: IIncome): string {
    // let relatedIncome = this.player.expenses.find(e => e.relatedEventId === this.eventInfo.id)

    return this.getIsLoanPayable(income) ?
      'Spłac pozostale ' + Math.round(income?.value! * income?.duration!) + 'PLN kredytu'
      : 'Za malo kasy zeby splacic kredyt';
  }
}
