import { Player } from './../models/player.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameService } from './../services/game.service';
import { IPlayer, INITIAL_PLAYER } from '../models/player.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() player: IPlayer;
  salaryProgress = 0;
  paydayInterval = 0;

  get salaryMessage() {

    let message = this.player.age.day === 1 ?
      'WYPLATA!'
      : 'wyplata za ' + (this.paydayInterval - this.player.age.day) + ' dni';
    return message;
  }

  get totalIncomes(): number {
    let res = 0;
    this.player.incomes.forEach(e => res += e.value);
    return res;
  }

  get totalExpenses(): number {
    let res = 0;
    this.player.expenses.forEach(e => res += e.value);
    return Math.abs(res);
  }

  get totalAssets(): number {
    let res = 0;
    this.player.assets.forEach(e => res += e.value);
    return res;
  }

  get balanceDescription() {
    return this.totalIncomes + ' - ' + this.totalExpenses + ' = ' + (this.totalIncomes - this.totalExpenses);
  }

  get isBalanceNegative() {
    return this.totalIncomes - this.totalExpenses < 0;
  }

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.paydayInterval = this.gameService.paydayIntervalInWeeks * this.gameService.turnDurationInDays;
  }

}
