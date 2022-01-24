export interface IGameGoal {
  id: number;
  name: string;
  description: string;
  price: number;
}

export class GameGoal implements IGameGoal {
  id = 0;
  name = '';
  description = '';
  price = 0;
}

export const GAME_GOALS_LIST: IGameGoal[] = [
  {
    id: 1,
    name: 'kanapka z hajsem',
    description: 'plywanie w hajsie jak skrudz McKwacz',
    price: 1000000,
  },
  {
    id: 2,
    name: 'dom z basenem',
    description: 'jak na filmach',
    price: 1000000,
  },
  {
    id: 3,
    name: 'lot w kosmos',
    description: 'fajosko',
    price: 10000000,
  },
]
