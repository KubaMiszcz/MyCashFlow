import { EVENT_TYPES, IEventType } from './../models/event-type.model';
import { IPlayer } from './../models/player.model';
import { GameService } from './../services/game.service';
import { IEvent } from './../models/event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  player: IPlayer;
  currentEvent: IEvent;
  eventTypes: IEventType[] = [];

  totalIncomes = 0;
  totalExpenses = 0;
  totalAssets = 0;

  constructor(
    private gameService: GameService,
  ) {
    this.eventTypes = EVENT_TYPES;
  }

  ngOnInit(): void {
    this.gameService.player$.subscribe(e => this.player = e);
    this.gameService.currentEvent$.subscribe(e => this.currentEvent = e);
    this.gameService.totalIncomes$.subscribe(e => this.totalIncomes = e);
    this.gameService.totalExpenses$.subscribe(e => this.totalExpenses = e);
    this.gameService.totalAssets$.subscribe(e => this.totalAssets = e);
  }

}
