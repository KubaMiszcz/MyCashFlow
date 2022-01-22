import { Player } from './../models/player.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlayer, PLAYER } from '../models/player.model';
import { IEvent, Event, EVENTS } from './../models/event.model';
import { EventType } from '../models/event-type.enum';
import { JOBS } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  player$ = new BehaviorSubject<IPlayer>(new Player);
  currentEvent$ = new BehaviorSubject<IEvent>(new Event);
  eventList = EVENTS;
  jobsList = JOBS;

  constructor() {
    const player = PLAYER;
    player.job = this.jobsList[Math.floor(Math.random() * this.jobsList.length)];

    this.player$.next(PLAYER);
  }

  nextTurn() {
    const player = this.player$.value;
    if (!(player.age % 4)) {
      player.totalCash += player.job.salary;
    }

    // this.player$.value.age = (player.age * 10 + 1) / 10;
    this.player$.value.age = player.age + 1;
    const currentEvent = this.drawEvent();

    switch (currentEvent.type) {
      case EventType.BigDeal:
        player.incomes.push(currentEvent);
        break;

      case EventType.Event:
        if (currentEvent.value > 0) {
          player.incomes.push(currentEvent);
        } else {
          player.expenses.push(currentEvent);
        }
        break;

      case EventType.Purchase:
        player.totalCash += currentEvent.value;
        break;

      case EventType.SmallDeal:
        player.incomes.push(currentEvent);
        break;

      default:
        break;
    }








    this.currentEvent$.next(currentEvent);
  }

  drawEvent(): IEvent {
    const ran = Math.floor(Math.random() * this.eventList.length);
    return this.eventList[ran];
  }

}
