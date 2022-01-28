import { Player } from './../models/player.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameService } from './../services/game.service';
import { IPlayer, INITIAL_PLAYER } from '../models/player.model';
import { Component, Input, OnInit } from '@angular/core';
import { GameSettingsService } from '../services/game-settings.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() player: IPlayer;
  salaryProgress = 0;
  paydayInterval = 0;

  totalIncomes = 0;
  totalExpenses = 0;
  totalAssets = 0;

  get salaryMessage() {
    let message = this.player.age.day === 1 ?
      'WYPLATA!'
      : 'wyplata za ' + (this.paydayInterval - this.player.age.day) + ' dni';
    return message;
  }

  get balanceDescription() {
    return this.totalIncomes + ' - ' + this.totalExpenses + ' = ' + (this.totalIncomes - this.totalExpenses);
  }

  get isBalanceNegative() {
    return this.totalIncomes - this.totalExpenses < 0;
  }

  constructor(
    private gameService: GameService,
    private gameSettingsService: GameSettingsService,
  ) { }

  ngOnInit(): void {
    this.paydayInterval = this.gameSettingsService.paydayIntervalInWeeks * this.gameSettingsService.turnDurationInDays;
    this.gameService.totalIncomes$.subscribe(i => this.totalIncomes = i);
    this.gameService.totalExpenses$.subscribe(i => this.totalExpenses = Math.abs(i));
    this.gameService.totalAssets$.subscribe(i => this.totalAssets = i);
  }

}
