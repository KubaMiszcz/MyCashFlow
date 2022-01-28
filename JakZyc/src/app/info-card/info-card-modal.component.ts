import { IEvent, Event, ALL_EVENTS_LIST } from '../models/event.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-info-card-modal',
  templateUrl: './info-card-modal.component.html',
  styleUrls: ['./info-card-modal.component.scss']
})
export class InfoCardModalComponent implements OnInit {
  eventInfo: IEvent = new Event();

  @ViewChild('infoCardModal') infoCardModal: any;

  constructor(
    private gameService: GameService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.gameService.showInfoCardE$.subscribe(value => {
      this.eventInfo = ALL_EVENTS_LIST.find(e => e.id === value.relatedEventId)!;// ?? new Event();;
      this.showModal();
    })
  }

  showModal() {
    this.modalService.open(this.infoCardModal, { ariaLabelledBy: 'modal-basic-title' });
  }
}
