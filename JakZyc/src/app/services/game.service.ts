import { IIncome } from './../models/income.model';
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

  loanInterestRate = 0.1;

  constructor() {
    const player = PLAYER;
    player.job = this.jobsList[Math.floor(Math.random() * this.jobsList.length)];
    player.incomes.push({ name: 'Wyplata', value: player.job.salary });
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
        this.handleBigDeal(player, currentEvent);
        break;

      case EventType.Event:
        player.totalCash += currentEvent.value;
        break;

      case EventType.Purchase:
        if (this.hasPlayerEnoughCash(player, currentEvent)) {
          player.totalCash -= currentEvent.value;
        } else {
          const loan = this.createLoan(currentEvent);
          player.expenses.push(loan);
        }

        player.assets.push(currentEvent);
        break;

      case EventType.SmallDeal:
        break;

      case EventType.SpecialEvent:
        break;

      default:
        break;
    }

    this.currentEvent$.next(currentEvent);
  }
  createLoan(currentEvent: IEvent) {
    const loanValue = Math.round(currentEvent.value * (1 + this.loanInterestRate));
    let loan: IIncome = {
      name: 'Kredyt na ' + loanValue + ' za ' + currentEvent.name,
      value: Math.round(-1 * loanValue * this.loanInterestRate),
      duration: 12,
    }
    console.log(loan);

    return loan;
  }

  handleBigDeal(player: IPlayer, currentEvent: IEvent) {
    if (this.hasPlayerEnoughCash(player, currentEvent)) {
      player.totalCash -= currentEvent.value;
    } else {
      const loan = this.createLoan(currentEvent);
      player.expenses.push(loan);
    }

    if (currentEvent.monthlyProfit) {
      if (currentEvent.monthlyProfit > 0) {
        player.incomes.push({
          name: this.getPrefix(currentEvent) + currentEvent.name,
          value: currentEvent.monthlyProfit ?? 0,
        });
      }
      if (currentEvent.monthlyProfit < 0) {
        player.expenses.push({
          name: this.getPrefix(currentEvent) + currentEvent.name,
          value: currentEvent.monthlyProfit ?? 0,
        });
      }
    }

    player.assets.push(currentEvent);
  }
  getPrefix(currentEvent: IEvent): string {
    if (currentEvent.monthlyProfit) {
      if (currentEvent.monthlyProfit > 0) {
        return 'wynajem '
      } else {
        return 'utrzymanie '
      }
    }
    return ''
  }

  drawEvent(): IEvent {
    const ran = Math.floor(Math.random() * this.eventList.length);
    return this.eventList[ran];
  }

  hasPlayerEnoughCash(player: IPlayer, currentEvent: IEvent) {
    return ((player.totalCash / 2) - currentEvent.value) > 0;
  }
}

