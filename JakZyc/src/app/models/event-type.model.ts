import { EventTypeEnum } from './constants/event-type.enum';

export interface IEventType {
  name: string;
  type: EventTypeEnum;
  image?: string;
  backgroundColor?: string;
  probabilityRate: number
}

export class EventType implements IEventType {
  name: string;
  type: EventTypeEnum;
  image?: string;
  backgroundColor?: string;
  probabilityRate: number
}


export const EVENT_TYPES_LIST: IEventType[] = [
  {
    name: "Maly Hajs",
    type: EventTypeEnum.SmallDeal,
    probabilityRate: 4,
  },
  {
    name: "Duzy Hajs",
    type: EventTypeEnum.BigDeal,
    probabilityRate: 2,
  },
  {
    name: "Zdarzenie",
    type: EventTypeEnum.Event,
    probabilityRate: 6,
  },
  {
    name: "Zakupki",
    type: EventTypeEnum.Purchase,
    probabilityRate: 6,
  },
]
