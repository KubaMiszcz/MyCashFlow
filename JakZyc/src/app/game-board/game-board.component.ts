import { IEvent } from './../models/event.model';
import { EventType, EVENT_TYPES } from './../models/event-type.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  eventTypes: string[] = [];

  constructor() {
    this.eventTypes = EVENT_TYPES;
  }

  ngOnInit(): void {
  }

}
