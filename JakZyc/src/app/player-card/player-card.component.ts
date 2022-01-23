import { Player } from './../models/player.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameService } from './../services/game.service';
import { IPlayer, PLAYER } from '../models/player.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  player: IPlayer = new Player;

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
  ) { }

  ngOnInit(): void {
    this.gameService.player$.subscribe(p => this.player = p);
  }

}
