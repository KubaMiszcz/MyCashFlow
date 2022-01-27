import { GameService } from './../services/game.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EVENT_TYPES_LIST, IEventType } from './../models/event-type.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-next-turn-modal',
  templateUrl: './next-turn-modal.component.html',
  styleUrls: ['./next-turn-modal.component.scss']
})
export class NextTurnModalComponent implements OnInit {
  eventTypes: IEventType[] = [];

  @ViewChild('infoCardModal') nextTurnModal: any;

  constructor(
    private gameService: GameService,
    private modalService: NgbModal,

  ) {
    this.eventTypes = EVENT_TYPES_LIST;
  }

  ngOnInit(): void {
    this.gameService.showNextTurnModalE$.subscribe(value => {
      this.showModal();
    })
  }

  showModal() {
    this.modalService.open(this.nextTurnModal, { ariaLabelledBy: 'modal-basic-title' });
  }

}
