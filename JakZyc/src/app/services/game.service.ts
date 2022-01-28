import { GameSettingsService } from './game-settings.service';
import { DialogResultEnum } from './../models/constants/dialog-result.enum';
import { EventType, EVENT_TYPES_LIST, IEventType } from './../models/event-type.model';
import { GAME_GOALS_LIST } from './../models/goal.model';
import { HelperService } from './helper.service';
import { IIncome } from './../models/income.model';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IPlayer, Player, INITIAL_PLAYER } from '../models/player.model';
import { IEvent, Event, ALL_EVENTS_LIST } from './../models/event.model';
import { EventTypeEnum } from '../models/constants/event-type.enum';
import { JOBS_LIST } from '../models/job.model';
import _ from 'lodash';
import { PLAYER_NAMES_LIST } from '../models/constants/playerNamesList';
import { IncomeTypeEnum } from '../models/constants/income-type.enum';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  player$ = new BehaviorSubject<IPlayer>(new Player);
  currentEvent$ = new BehaviorSubject<IEvent>(new Event);
  totalIncomes$ = new BehaviorSubject<number>(0);
  totalExpenses$ = new BehaviorSubject<number>(0);
  totalAssets$ = new BehaviorSubject<number>(0);
  showInfoCardE$ = new EventEmitter<IIncome>();
  showNextTurnModalE$ = new EventEmitter<boolean>();

  eventList = ALL_EVENTS_LIST;

  constructor(
    private helperService: HelperService,
    private gameSettingsService: GameSettingsService,
  ) {
    this.createNewPlayer();
    this.eventList = ALL_EVENTS_LIST.filter(e => e.id > 0);
    this.updateAndPublishTotalAmounts(this.player$.value);

    this.gameSettingsService.dateYearToPlayerAgeInterval = new Date().getFullYear() - this.player$.value.age.year;

    this.currentEvent$.next(this.drawEvent());
  }

  startNewTurn() {
    let event = this.drawEvent();
    this.currentEvent$.next(event);
    this.showNextTurnModalE$.emit(true);
  }

  finishTurn(result: DialogResultEnum) {
    const player = this.player$.value;
    this.cleanIsNewStatuses(player);

    this.increasePlayerAge(player);

    let currentEvent = this.currentEvent$.value;
    if (result === DialogResultEnum.Accept) {
      this.handleWithCurrentEvent(player, currentEvent);
    }

    if (player.age.day === 1) {
      this.applyPayday(player);
      this.updateLoans(player.expenses);
    }

    this.updateAndPublishTotalAmounts(player);
    this.player$.next(player);
  }

  updatePlayerInfo(player: IPlayer) {
    this.player$.next(player)
  }

  isPlayerNewlyCreated(): boolean {
    const player = this.player$.value;
    return (player.age.month == 0)
      && (player.age.day == 1)
      && (player.assets?.length == 0)
      && (player.incomes?.length == 1)
      && (player.expenses?.length == 1)
      && (player.totalCash == player.job.salary);
  }







  //////////////////////////////////////////////////////////////////
  /////////////////////                    /////////////////////////
  /////////////////////       PRIVATE      /////////////////////////
  /////////////////////                    /////////////////////////
  //////////////////////////////////////////////////////////////////

  private updateAndPublishTotalAmounts(player: IPlayer) {
    this.totalIncomes$.next(this.helperService.sumValues(player.incomes));
    this.totalExpenses$.next(this.helperService.sumValues(player.expenses));
    this.totalAssets$.next(this.helperService.sumValues(player.assets));
  }

  private increasePlayerAge(player: IPlayer) {
    player.age.day += 7;
    if (player.age.day > (this.gameSettingsService.turnDurationInDays * this.gameSettingsService.paydayIntervalInWeeks)) {
      player.age.day = 1;
      player.age.month += 1;
    }

    if (player.age.month > 11) {
      player.age.year += 1;
      player.age.month = 0;
      this.applyBirthDay(player);
    }
  }

  private applyBirthDay(player: IPlayer) {
    // let event = this.eventList.filter(e=>e.type===EventTypeEnum.SpecialEvent).find(e=>e.name.match)
    // throw new Error('Method not implemented.');
  }

  private cleanIsNewStatuses(player: IPlayer) {
    player.incomes.forEach(i => i.isNew = false)
    player.expenses.forEach(i => i.isNew = false)
    player.assets.forEach(i => i.isNew = false)
  }

  private handleWithCurrentEvent(player: IPlayer, currentEvent: IEvent) {
    switch (currentEvent.type) {
      case EventTypeEnum.SmallDeal:
        this.handleWithDeal(player, currentEvent);
        break;

      case EventTypeEnum.BigDeal:
        this.handleWithDeal(player, currentEvent);
        break;

      case EventTypeEnum.Event:
        player.totalCash += currentEvent.value;
        break;

      case EventTypeEnum.Purchase:
        if (this.hasPlayerEnoughCash(player, currentEvent)) {
          player.totalCash -= currentEvent.value;
        } else {
          const loan = this.createNewLoan(currentEvent);
          player.expenses.push(loan);
        }

        player.assets.push(this.convertEventToNewlyAddedIncome(currentEvent, false));
        break;

      case EventTypeEnum.SpecialEvent:
        break;

      default:
        break;
    }
  }

  private applyPayday(player: IPlayer) {
    let totalIncomes = this.helperService.sumValues(player.incomes);
    let totalExpenses = this.helperService.sumValues(player.expenses);

    player.totalCash += totalIncomes + totalExpenses;
  }

  private handleWithDeal(player: IPlayer, currentEvent: IEvent) {
    if (this.hasPlayerEnoughCash(player, currentEvent)) {
      player.totalCash -= currentEvent.value;
    } else {
      const loan = this.createNewLoan(currentEvent);
      player.expenses.push(loan);
    }

    if (currentEvent.monthlyProfit) {
      if (currentEvent.monthlyProfit > 0) {
        player.incomes.push(this.convertEventToNewlyAddedIncome(currentEvent, true));
      }
      if (currentEvent.monthlyProfit < 0) {
        player.expenses.push(this.convertEventToNewlyAddedIncome(currentEvent, true));
      }
    }

    player.assets.push(this.convertEventToNewlyAddedIncome(currentEvent, false));
  }

  private convertEventToNewlyAddedIncome(currentEvent: IEvent, withPrefix: boolean): IIncome {
    return {
      name: (withPrefix ? this.getPrefix(currentEvent) : '') + currentEvent.name,
      value: currentEvent.monthlyProfit ?? currentEvent.value,
      isNew: true,
      relatedEventId: currentEvent.id,
    };
  }

  private getPrefix(currentEvent: IEvent): string {
    if (currentEvent.monthlyProfit) {
      if (currentEvent.monthlyProfit > 0) {
        return this.gameSettingsService.incomeNamePrefix;
      } else {
        return this.gameSettingsService.expenseNamePrefix;
      }
    }
    return ''
  }

  private drawEvent(): IEvent {
    const list = this.eventList.filter(e => e.type === this.drawEventType().type);
    return list?.[_.random(list.length - 1)];
  }

  private drawEventType(): IEventType {
    let probabilitySum = this.helperService.sumProperties(EVENT_TYPES_LIST, 'probabilityRate');
    let typeHit = _.random(0.001, probabilitySum - 1);

    let drawedType = new EventType();
    let low = 0;
    let high = 0;

    EVENT_TYPES_LIST.forEach(t => {
      high = low + t.probabilityRate;
      if (typeHit > low && typeHit <= high) {
        drawedType = t;
      }
      low = high;
    })

    return drawedType;
  }

  private hasPlayerEnoughCash(player: IPlayer, currentEvent: IEvent) {
    return ((player.totalCash / 2) - currentEvent.value) > 0;
  }

  private createNewPlayer() {
    const player = INITIAL_PLAYER;
    player.name = PLAYER_NAMES_LIST[_.random(PLAYER_NAMES_LIST.length - 1)];

    player.job = JOBS_LIST[_.random(JOBS_LIST.length - 1)];
    player.job.salary = Math.floor(player.job.salary * _.random(0.8, 1.2) / 100) * 100;
    player.totalCash = player.job.salary;

    player.age = { year: _.random(20, 50), month: 0, day: 1 };

    player.goal = GAME_GOALS_LIST[_.random(GAME_GOALS_LIST.length - 1)];

    this.addInitialIncomes(player);
    this.addInitialExpenses(player);

    this.player$.next(player);
  }

  private addInitialIncomes(player: IPlayer) {
    const salaryId = -1;
    const event = ALL_EVENTS_LIST.find(e => e.id === salaryId) ?? new Event();
    event.value = player.job.salary;
    event.monthlyProfit = event.value;

    const income = this.convertEventToNewlyAddedIncome(event, false);
    player.incomes.push(income);
  }

  private addInitialExpenses(player: IPlayer) {
    const smallOrdinaryMonthlyExpensesId = -2;
    const event = ALL_EVENTS_LIST.find(e => e.id === smallOrdinaryMonthlyExpensesId) ?? new Event();
    event.value = -1 * player.job.salary * this.gameSettingsService.personalExpensesRate;
    event.monthlyProfit = event.value;

    const expense = this.convertEventToNewlyAddedIncome(event, false);
    player.expenses.push(expense);
  }




  private createNewLoan(currentEvent: IEvent) {
    const loanValue = Math.round(currentEvent.value * (1 + this.gameSettingsService.loanDefaultInterestRate));
    let loan: IIncome = {
      name: 'Kredyt na ' + loanValue + ' za ' + currentEvent.name + '(' + this.gameSettingsService.loanDefaultDuration + 'mcy)',
      type: IncomeTypeEnum.Loan,
      value: Math.round(-1 * loanValue * this.gameSettingsService.loanDefaultInterestRate),
      isNew: true,
      duration: 12,
      relatedEventId: currentEvent.id,
    }

    return loan;
  }

  private updateLoans(list: IIncome[]) {
    list.forEach(i => {
      if (i.type === IncomeTypeEnum.Loan) {
        if (i.duration && (i.duration > 0)) {
          i.duration--;
          i.name = this.updateLoanSuffix(i);
        }
      }
    });
  }

  private updateLoanSuffix(loan: IIncome) {
    let items = loan.name.split('(')
    let ending = (loan.duration ?? 0) > 4 ? 'mcy'
      : (loan.duration ?? 0) > 1 ? 'mce' : 'mc';

    return items[0] + ' (' + loan.duration + ending + ')';
  }
}

