import { MONTHS_LIST } from './../models/monthsList';
import { Component, OnInit } from '@angular/core';
import { IAge, Age } from '../models/age.model';
import { IEvent } from '../models/event.model';
import { GameService } from '../services/game.service';
import { IPlayer } from '../models/player.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentEvent: IEvent;
  currentDate = new Age;
  currentPlayer: IPlayer;

  monthsList = MONTHS_LIST;


  // get currentYear() {
  //   return this.currentDate.year + this.yearInterval;
  // }

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.gameService.currentEvent$.subscribe(e => this.currentEvent = e);
    this.gameService.player$.subscribe(p => {
      // this.yearInterval = new Date().getFullYear() - p.age.year;
      console.log(p.age);

      this.currentDate = p.age;
      this.currentDate.year += this.gameService.dateYearInterval;
    });
  }

  nextTurn(value: boolean) {
    this.gameService.nextTurn(value);
  }

}
