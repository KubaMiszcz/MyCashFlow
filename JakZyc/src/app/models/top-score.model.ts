import { IGameGoal } from './goal.model';
import { IPlayer, INITIAL_PLAYER } from './player.model';
export interface ITopScore {
  placeNumber?: number;
  player: IPlayer;
  goal?: IGameGoal;
  totalCash: number;
  date: string;
}

export const TOP100: ITopScore[] = [
  {
    player: INITIAL_PLAYER,
    totalCash: 1000,
    date: new Date().toLocaleString(),
  },
  {
    player: INITIAL_PLAYER,
    totalCash: 11000,
    date: new Date().toLocaleString(),
  }, {
    player: INITIAL_PLAYER,
    totalCash: 1200,
    date: new Date().toLocaleString(),
  }, {
    player: INITIAL_PLAYER,
    totalCash: 1400,
    date: new Date().toLocaleString(),
  }, {
    player: INITIAL_PLAYER,
    totalCash: 2100,
    date: new Date().toLocaleString(),
  },
]
