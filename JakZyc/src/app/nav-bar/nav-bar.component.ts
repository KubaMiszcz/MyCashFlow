import { Component, OnInit } from '@angular/core';
import { IEvent } from '../models/event.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentEvent: IEvent;

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.gameService.currentEvent$.subscribe(e => this.currentEvent = e);
  }

  nextTurn() {
    this.gameService.nextTurn();
  }

}
