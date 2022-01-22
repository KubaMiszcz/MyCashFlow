import { Player } from './../models/player.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlayer, PLAYER } from '../models/player.model';
import { IEvent, Event, EVENTS } from './../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  player$ = new BehaviorSubject<IPlayer>(new Player);
  currentEvent$ = new BehaviorSubject<IEvent>(new Event);
  eventList = EVENTS;

  constructor() {
    this.player$.next(PLAYER);
  }

  nextTurn() {
    const player = this.player$.value;

    console.log(player.age, player.age % 4);

    if (!(player.age % 4)) {
      player.totalCash += player.salary;
    }
    // this.player$.value.age = (player.age * 10 + 1) / 10;
    this.player$.value.age = player.age + 1;
    this.drawEvent();
  }

  drawEvent() {
    const ran = Math.floor(Math.random() * 3);
    this.currentEvent$.next(this.eventList[ran]);
  }

}
