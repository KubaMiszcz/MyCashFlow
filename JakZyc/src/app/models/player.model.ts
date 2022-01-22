import { IIncome } from './income.model';
export interface IPlayer {
  name: string;
  jobName: string;
  salary: number;
  age: number;
  incomes: IIncome[];
  expenses: IIncome[];
}


export class Player implements IPlayer {
  name = '';
  jobName = '';
  salary = 0;
  age = 0;
  incomes = [];
  expenses = [];
}


export const PLAYER: IPlayer = {
  name: 'JohnDoe',
  jobName: 'Janitor',
  salary: 1000,
  age: 20.0,
  incomes: [{
    name: 'aa',
    value: 100,
  },
  {
    name: 'bb',
    value: 100,
  },
  ],
  expenses: [
    {
      name: 'cc',
      value: -100,
    },
  ],
}