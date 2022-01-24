import { EventTypeEnum } from './event-type.enum';

export interface IEventType {
  name: string;
  type: EventTypeEnum;
  image?: string;
  backgroundColor?: string;
  probabilityRate?: number
}


export const EVENT_TYPES: IEventType[] = [
  {
    name: "Maly Hajs",
    type: EventTypeEnum.SmallDeal,
  },
  {
    name: "Duzy Hajs",
    type: EventTypeEnum.BigDeal,
  },
  {
    name: "Zdarzenie",
    type: EventTypeEnum.Event,
  },
  {
    name: "Zakupki",
    type: EventTypeEnum.Purchase,
  },
]