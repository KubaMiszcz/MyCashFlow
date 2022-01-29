import { DialogResultEnum } from './../models/constants/dialog-result.enum';
import { IIncome } from './../models/income.model';
import { EVENT_TYPES_LIST, IEventType } from './../models/event-type.model';
import { IPlayer } from './../models/player.model';
import { GameService } from './../services/game.service';
import { IEvent, ALL_EVENTS_LIST } from './../models/event.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  eventInfoCard: IEvent;
  showInfoCardModal = false;

  constructor(
    private gameService: GameService,
  ) {
    this.eventTypes = EVENT_TYPES_LIST;
  }

  ngOnInit(): void {
    this.gameService.player$.subscribe(e => this.player = e);
    this.gameService.currentEvent$.subscribe(e => this.currentEvent = e);
    this.gameService.totalIncomes$.subscribe(e => this.totalIncomes = e);
    this.gameService.totalExpenses$.subscribe(e => this.totalExpenses = e);
    this.gameService.totalAssets$.subscribe(e => this.totalAssets = e);

    console.log('sd');

  }

  onIncomeClick(value: IIncome) {
    this.gameService.showInfoCard(value);
  }

}
