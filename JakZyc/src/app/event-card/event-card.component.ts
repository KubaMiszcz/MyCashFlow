import { DialogResultEnum } from './../models/constants/dialog-result.enum';
import { GameService } from './../services/game.service';
import { IEvent, Event } from './../models/event.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event: IEvent = new Event();
  @Output() result = new EventEmitter<DialogResultEnum>();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  rejectEvent() {
    this.result.emit(DialogResultEnum.Reject);
  }

  acceptEvent() {
    this.result.emit(DialogResultEnum.Accept);
  }
}
