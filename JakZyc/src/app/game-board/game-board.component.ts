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
  eventTypes: IEventType[] = [];

  currentEvent: IEvent;

  get totalIncomes(): number {
    let res = 0;
    this.player.incomes.forEach(e => res += e.value);
    return res;
  }

  get totalExpenses(): number {
    let res = 0;
    this.player.expenses.forEach(e => res += e.value);
    return res;
  }

  get totalAssets(): number {
    let res = 0;
    this.player.assets.forEach(e => res += e.value);
    return res;
  }

  constructor(
    private gameService: GameService,
  ) {
    this.eventTypes = EVENT_TYPES;
  }

  ngOnInit(): void {
    this.gameService.player$.subscribe(e => this.player = e);
    this.gameService.currentEvent$.subscribe(e => this.currentEvent = e);
  }

}
