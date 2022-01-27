import { IEvent } from './../models/event.model';
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
  currentEvent: IEvent;
  eventTypes: IEventType[] = [];

  activeTypeName = '';

  eventPickingFinished = false;


  private minHitCount = 6;
  private hitInterval = 150;
  @ViewChild('infoCardModal') infoCardModal: any;

  constructor(
    private gameService: GameService,
    private modalService: NgbModal,

  ) {
    this.eventTypes = EVENT_TYPES_LIST;
  }

  ngOnInit(): void {
    this.gameService.showNextTurnModalE$.subscribe(e => {
      this.currentEvent = e;
      this.showModal();
    });
  }

  showModal() {
    this.eventPickingFinished = false;
    this.modalService.open(this.infoCardModal, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });

    let idx = 0;
    let cnt = 0;
    let handle = setInterval(() => {
      this.activeTypeName = this.eventTypes[idx].name;
      idx++;
      cnt++;

      if (idx >= this.eventTypes.length) {
        idx = 0;
      }

      if (cnt > this.minHitCount && this.eventTypes[idx].type === this.currentEvent.type) {
        clearInterval(handle);
        this.eventPickingFinished = true;
      }
    }, this.hitInterval);
  }

}
