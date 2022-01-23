import { IPlayer } from './player.model';
export interface ITopScore {
  player: IPlayer;
  totalCash: number;
  date: Date;
}
