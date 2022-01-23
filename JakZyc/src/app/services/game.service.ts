import { IIncome } from './../models/income.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlayer, Player, INITIAL_PLAYER } from '../models/player.model';
import { IEvent, Event, EVENTS } from './../models/event.model';
import { EventTypeEnum } from '../models/event-type.enum';
import { JOBS } from '../models/job.model';
import { IAge } from '../models/age.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  player$ = new BehaviorSubject<IPlayer>(new Player);
  currentEvent$ = new BehaviorSubject<IEvent>(new Event);
  eventList = EVENTS;
  jobsList = JOBS;

  loanInterestRate = 0.1;
  personalExpensesRate = 0.5;

  turnDurationInDays = 7;
  paydayIntervalInWeeks = 4;
  dateYearInterval = 0;

  constructor() {
    const player = INITIAL_PLAYER;
    player.job = this.jobsList[Math.floor(Math.random() * this.jobsList.length)];
    player.totalCash = player.job.salary;
    player.incomes.push({ name: 'Wyplata', value: player.job.salary });
    player.expenses.push({ name: 'Wydatki domowe', value: (player.job.salary * this.personalExpensesRate) });
    this.player$.next(INITIAL_PLAYER);

    this.dateYearInterval = new Date().getFullYear() - player.age.year;

    this.currentEvent$.next(this.drawEvent());
  }

  nextTurn(isEventAccepted: boolean) {

    const player = this.player$.value;
    this.cleanIsNewStatus(player);

    this.increasePlayerAge(player);

    let currentEvent = this.currentEvent$.value;

    if (isEventAccepted) {
      this.handleWithCurrentEvent(player, currentEvent);
    }

    if (player.age.day === 1) {
      this.applyPayday(player);
    }

    currentEvent = this.drawEvent();
    this.currentEvent$.next(currentEvent);
  }

  increasePlayerAge(player: IPlayer) {
    player.age.day += 7;
    if (player.age.day > (this.turnDurationInDays * this.paydayIntervalInWeeks)) {
      player.age.day = 1;
      player.age.month += 1;
    }

    if (player.age.month > 11) {
      player.age.year += 1;
      player.age.month = 0;
    }
  }

  cleanIsNewStatus(player: IPlayer) {
    player.incomes.forEach(i => i.isNew = false)
    player.expenses.forEach(i => i.isNew = false)
    player.assets.forEach(i => i.isNew = false)
  }

  handleWithCurrentEvent(player: IPlayer, currentEvent: IEvent) {
    switch (currentEvent.type) {
      case EventTypeEnum.BigDeal:
        this.handleBigDeal(player, currentEvent);
        break;

      case EventTypeEnum.Event:
        player.totalCash += currentEvent.value;
        break;

      case EventTypeEnum.Purchase:
        if (this.hasPlayerEnoughCash(player, currentEvent)) {
          player.totalCash -= currentEvent.value;
        } else {
          const loan = this.createLoan(currentEvent);
          loan.isNew = true;
          player.expenses.push(loan);
        }

        let asset = currentEvent as IIncome;
        asset.isNew = true;
        player.assets.push(asset);
        break;

      case EventTypeEnum.SmallDeal:
        break;

      case EventTypeEnum.SpecialEvent:
        break;

      default:
        break;
    }
  }

  applyPayday(player: IPlayer) {
    let totalIncomes = 0;
    let totalExpenses = 0;
    player.incomes.forEach(i => totalIncomes += i.value);
    player.expenses.forEach(i => totalExpenses += i.value);

    player.totalCash += totalIncomes + totalExpenses;
  }

  createLoan(currentEvent: IEvent) {
    const loanValue = Math.round(currentEvent.value * (1 + this.loanInterestRate));
    let loan: IIncome = {
      name: 'Kredyt na ' + loanValue + ' za ' + currentEvent.name,
      value: Math.round(-1 * loanValue * this.loanInterestRate),
      duration: 12,
    }

    return loan;
  }

  handleBigDeal(player: IPlayer, currentEvent: IEvent) {
    if (this.hasPlayerEnoughCash(player, currentEvent)) {
      player.totalCash -= currentEvent.value;
    } else {
      const loan = this.createLoan(currentEvent);
      loan.isNew = true;
      player.expenses.push(loan);
    }

    if (currentEvent.monthlyProfit) {
      if (currentEvent.monthlyProfit > 0) {
        player.incomes.push({
          name: this.getPrefix(currentEvent) + currentEvent.name,
          value: currentEvent.monthlyProfit ?? 0,
          isNew: true,
        });
      }
      if (currentEvent.monthlyProfit < 0) {
        player.expenses.push({
          name: this.getPrefix(currentEvent) + currentEvent.name,
          value: currentEvent.monthlyProfit ?? 0,
          isNew: true,
        });
      }
    }

    let asset = currentEvent as IIncome;
    asset.isNew = true;
    player.assets.push(asset);
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
    const event = this.eventList[ran];
    return event;
  }

  hasPlayerEnoughCash(player: IPlayer, currentEvent: IEvent) {
    return ((player.totalCash / 2) - currentEvent.value) > 0;
  }
}

