import { MONTHS_LIST } from '../models/constants/monthsList';
import { Component, OnInit } from '@angular/core';
import { IAge, Age } from '../models/age.model';
import { IEvent } from '../models/event.model';
import { GameService } from '../services/game.service';
import { IPlayer } from '../models/player.model';
import { GameSettingsService } from '../services/game-settings.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentEvent: IEvent;
  currentDate = new Age();
  currentPlayer: IPlayer;

  monthsList = MONTHS_LIST;

  constructor(
    private gameService: GameService,
    private gameSettingsService: GameSettingsService,
  ) { }

  ngOnInit(): void {
    this.gameService.currentEvent$.subscribe(e => this.currentEvent = e);
    this.gameService.player$.subscribe(p => {
      this.currentDate = { ...p.age };
      this.currentDate.year += this.gameSettingsService.dateYearToPlayerAgeInterval;
    });

  }

  nextTurn() {
    this.gameService.startNewTurn();
  }

}
