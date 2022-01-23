import { EVENT_TYPES } from './../models/event-type.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-turn-modal',
  templateUrl: './next-turn-modal.component.html',
  styleUrls: ['./next-turn-modal.component.scss']
})
export class NextTurnModalComponent implements OnInit {
  eventTypes: string[] = [];


  constructor() {
    this.eventTypes = EVENT_TYPES;
  }

  ngOnInit(): void {
  }

}
