import { IEvent } from './../models/event.model';
import { Player } from './../models/player.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlayer, PLAYER } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  player$ = new BehaviorSubject<IPlayer>(new Player);
  player$ = new BehaviorSubject<IEvent>(new Player);

  constructor() {
    this.player$.next(PLAYER);
  }

  nextTurn() {
    this.player$.value.age = (this.player$.value.age * 10 + 1) / 10;

    this.drawEvent();
  }

  drawEvent() {

  }

}
