import { GameService } from './../services/game.service';
import { IEvent, Event } from './../models/event.model';
import { EventType, EVENT_TYPES } from './../models/event-type.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  eventTypes: string[] = [];

  currentEvent: IEvent;

  constructor(
    private gameService: GameService,
  ) {
    this.eventTypes = EVENT_TYPES;
  }

  ngOnInit(): void {
    this.gameService.currentEvent$.subscribe(e => this.currentEvent = e);
  }

}
