import { IAge } from './age.model';
import { IGameGoal, GAME_GOALS_LIST } from './goal.model';
import { IIncome } from './income.model';
import { IJob } from './job.model';
export interface IPlayer {
  name: string;
  job: IJob;
  totalCash: number;
  age: IAge;
  image?: string;
  incomes: IIncome[];
  expenses: IIncome[];
  assets: IIncome[];
  goal?: IGameGoal;
}


export class Player implements IPlayer {
  name: '';
  job: { id: 1, name: '', salary: 0 };
  age: { year: 20, month: 1, day: 1 };
  salary: 0;
  totalCash: 0;
  incomes: [];
  expenses: [];
  assets: [];
}


export const INITIAL_PLAYER: IPlayer = {
  name: '',
  job: { id: 1, name: '', salary: 0, },
  goal: GAME_GOALS_LIST[2],
  totalCash: 0,
  age: { year: 20, month: 1, day: 1 },
  incomes: [],
  expenses: [],
  assets: [],
}
