import { GameService } from './../services/game.service';
import { IEvent } from './../models/event.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event: IEvent;

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
  }

  rejectEvent() {
    this.gameService.nextTurn(false);
  }

  acceptEvent() {
    this.gameService.nextTurn(true);
  }

}
