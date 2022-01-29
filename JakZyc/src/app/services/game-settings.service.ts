import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  loanDefaultInterestRate = 0.1;
  loanDefaultDurationForSmallDeal = 12;
  loanDefaultDurationForBigDeal = 5 * 12;
  // loanDefaultInterestRateDeviation = 0.1;

  personalExpensesRate = 0; //0.5?
  initialPersonalExpensesRate = 0.5; //0.5?
  turnDurationInDays = 7;
  paydayIntervalInWeeks = 4;
  dateYearToPlayerAgeInterval = 0;
  incomeNamePrefix = 'wynajem ';
  expenseNamePrefix = 'utrzymanie ';
  birthDayGiftRate = 0.2;

  constructor() { }

}

