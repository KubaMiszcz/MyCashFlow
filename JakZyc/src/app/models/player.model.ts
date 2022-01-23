import { IGameGoal } from './goal.model';
import { IIncome } from './income.model';
import { IJob } from './job.model';
export interface IPlayer {
  name: string;
  job: IJob;
  totalCash: number;
  age: number;
  image?: string;
  incomes: IIncome[];
  expenses: IIncome[];
  assets: IIncome[];
  goal?: IGameGoal;
}


export class Player implements IPlayer {
  name = '';
  job = { name: '', salary: 0 };
  salary = 0;
  totalCash = 0;
  age = 0;
  incomes = [];
  expenses = [];
  assets = [];
}


export const PLAYER: IPlayer = {
  name: 'JohnDoe',
  job: { name: '', salary: 0, },
  totalCash: 0,
  age: 20.0,
  incomes: [],
  expenses: [],
  assets: [],
}