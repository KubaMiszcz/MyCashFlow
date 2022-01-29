import { DialogResultEnum } from './../models/constants/dialog-result.enum';
import { IEvent } from './../models/event.model';
import { GameService } from './../services/game.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EVENT_TYPES_LIST, IEventType } from './../models/event-type.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-next-turn-modal',
  templateUrl: './next-turn-modal.component.html',
  styleUrls: ['./next-turn-modal.component.scss']
})
export class NextTurnModalComponent implements OnInit {
  currentEvent: IEvent;
  eventTypes: IEventType[] = [];

  activeTypeName = '';

  eventPickingFinished = false;


  @ViewChild('infoCardModal') infoCardModal: any;
  private modalRef: NgbModalRef;

  private minHitCount = 1;
  private hitInterval = 150;

  constructor(
    private gameService: GameService,
    private modalService: NgbModal,

  ) {
    this.eventTypes = EVENT_TYPES_LIST;
  }

  ngOnInit(): void {
    this.gameService.showNextTurnModalE$.subscribe(v => {
      if (v) {
        this.showModal()
      } else {
        this.closeModal()
      }
    });

    this.gameService.currentEvent$.subscribe(e => this.currentEvent = e);
  }

  closeModal(): void {
    this.modalRef.close();
  }

  showModal() {
    this.eventPickingFinished = false;
    this.modalRef = this.modalService.open(this.infoCardModal, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });

    let idx = 0;
    let cnt = 0;
    let handle = setInterval(() => {
      this.activeTypeName = this.eventTypes[idx].name;
      if (cnt > this.minHitCount && this.eventTypes[idx].type === this.currentEvent.type) {
        clearInterval(handle);
        this.eventPickingFinished = true;
      }

      idx++;
      cnt++;

      if (idx >= this.eventTypes.length) {
        idx = 0;
      }

    }, this.hitInterval);
  }

  onDialogClose(value: DialogResultEnum) {
    this.gameService.finishTurn(value);
    this.closeModal();
  }

  onKeyPressed(event: KeyboardEvent) {
    if (
      !this.currentEvent.isRejectable
      || event.code === "Enter"
      || event.code === "Space"
    ) {
      this.onDialogClose(DialogResultEnum.Accept);
    }else{
    // if (event.code === "Escape" && this.currentEvent.isRejectable) {
    this.onDialogClose(DialogResultEnum.Reject);
    }

    
    this.closeModal();
  }
}
