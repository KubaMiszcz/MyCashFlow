export interface IGameGoal {
  name: string;
  description: string;
  price: number;
}

export const GAME_GOALS_LIST: IGameGoal[] = [
  {
    name: 'kanapka z hajsem',
    description: 'plywanie w hajsie jak skrudz McKwacz',
    price: 1000000,
  },
  {
    name: 'dom z basenem',
    description: 'jak na filmach',
    price: 1000000,
  },
  {
    name: 'lot w kosmos',
    description: 'fajosko',
    price: 10000000,
  },
]
