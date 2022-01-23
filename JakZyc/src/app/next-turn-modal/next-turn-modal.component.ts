import { Component, OnInit } from '@angular/core';
import { EVENT_TYPES, IEventType } from './../models/event-type.model';

@Component({
  selector: 'app-next-turn-modal',
  templateUrl: './next-turn-modal.component.html',
  styleUrls: ['./next-turn-modal.component.scss']
})
export class NextTurnModalComponent implements OnInit {
  eventTypes: IEventType[] = [];


  constructor() {
    this.eventTypes = EVENT_TYPES;
  }

  ngOnInit(): void {
  }

}
