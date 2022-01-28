import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  loanDefaultInterestRate = 0.1;
  loanDefaultDuration = 12;
  personalExpensesRate = 0.5;
  turnDurationInDays = 7;
  paydayIntervalInWeeks = 4;
  dateYearToPlayerAgeInterval = 0;
  incomeNamePrefix = 'wynajem ';
  expenseNamePrefix = 'utrzymanie ';

  constructor() { }

}

