import { IIncome } from './income.model';
import { EventType } from './event-type.enum';
export interface IEvent {
  name: string;
  type: EventType
  value: number;
  rejectable?: boolean
}

export const EVENTS: IEvent[] = [
  {
    name: 'aa',
    type: EventType.Purchase,
    value: 100,
  },
  {
    name: 'bb',
    type: EventType.Purchase,
    value: 100,
  },
  {
    name: 'cc',
    type: EventType.Purchase,
    value: -100,
  },
]
