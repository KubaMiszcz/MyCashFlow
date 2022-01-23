import { IIncome } from './income.model';
import { EventType } from './event-type.enum';

export interface IEvent {
  name: string;
  description?: string; //make it nonnullable
  value: number;
  monthlyProfit?: number;
  type?: EventType
  rejectable?: boolean;
  percentable?: boolean;
}


export class Event implements IEvent {
  name = '';
  value = 0;
}

export const EVENTS: IEvent[] = [
  //big deals
  { name: 'dzialkaRODOS', type: EventType.BigDeal, value: 10000, monthlyProfit: 1000, },
  { name: 'dzialkaRODOS', type: EventType.BigDeal, value: 10000, monthlyProfit: -1000, },
  { name: 'kawalerka', type: EventType.BigDeal, value: 150000, monthlyProfit: 1500, },
  { name: 'mieszkanie2pok', type: EventType.BigDeal, value: 225000, monthlyProfit: 2250, },
  { name: 'mieszkanie4pok', type: EventType.BigDeal, value: 300000, monthlyProfit: 3000, },
  { name: 'dzialka grunt', type: EventType.BigDeal, value: 100000, monthlyProfit: -100, },
  { name: 'domek letni', type: EventType.BigDeal, value: 50000, monthlyProfit: -300, },
  { name: 'domek letni', type: EventType.BigDeal, value: 50000, monthlyProfit: 300, },
  { name: 'maly dom', type: EventType.BigDeal, value: 300000, monthlyProfit: 1500, },
  { name: 'sredni dom', type: EventType.BigDeal, value: 500000, monthlyProfit: 2500, },
  { name: 'duzy dom', type: EventType.BigDeal, value: 1000000, monthlyProfit: 10000, },
  { name: 'auto1', type: EventType.BigDeal, value: 5000, monthlyProfit: -500, },
  { name: 'auto2', type: EventType.BigDeal, value: 15000, monthlyProfit: -1500, },
  { name: 'auto3', type: EventType.BigDeal, value: 30000, monthlyProfit: -3000, },
  { name: 'garaz duzy', type: EventType.BigDeal, value: 10000, monthlyProfit: -500, },
  { name: 'garaz maly', type: EventType.BigDeal, value: 25000, monthlyProfit: -1250, },
  { name: 'garaz duzy', type: EventType.BigDeal, value: 10000, monthlyProfit: 500, },
  { name: 'garaz maly', type: EventType.BigDeal, value: 25000, monthlyProfit: 1250, },
  // { name: 'pozyczka duza komus 1', type: EventType.BigDeal, value: 10000, },
  // { name: 'pozyczka duza komus 2', type: EventType.BigDeal, value: 20000, },
  // { name: 'pozyczka duza komus 3', type: EventType.BigDeal, value: 50000, },

  //one time events in plus
  { name: 'wlasne urodziny', type: EventType.Event, value: 500, },
  { name: 'szkolenie1podwyzka%', type: EventType.Event, value: 10, percentable: true, },//%
  { name: 'szkolenie2podwyzka%', type: EventType.Event, value: 20, percentable: true, },//%
  { name: 'szkolenie2podwyzka%', type: EventType.Event, value: 30, percentable: true, },//%
  { name: 'wyprzedaz z domu cos1', type: EventType.Event, value: 100, },
  { name: 'wyprzedaz z domu cos2', type: EventType.Event, value: 200, },
  { name: 'wyprzedaz z domu cos3', type: EventType.Event, value: 500, },
  { name: 'fucha1', type: EventType.Event, value: 100, },
  { name: 'fucha2', type: EventType.Event, value: 500, },
  { name: 'fucha3', type: EventType.Event, value: 1000, },

  // one time events minus
  { name: 'basen', type: EventType.Event, value: -50, },
  { name: 'kino', type: EventType.Event, value: -50, },
  { name: 'pizza', type: EventType.Event, value: -50, },
  { name: 'chinskie', type: EventType.Event, value: -50, },
  { name: 'narty', type: EventType.Event, value: -200, },
  { name: 'disco', type: EventType.Event, value: -100, },
  { name: 'bezdomny kotek', type: EventType.Event, value: -200, },
  { name: 'wesele', type: EventType.Event, value: -500, },
  { name: 'komunia', type: EventType.Event, value: -500, },
  { name: 'urodziny', type: EventType.Event, value: -500, },
  { name: 'pogrzeb', type: EventType.Event, value: -500, },
  { name: 'naprawa kran', type: EventType.Event, value: -150, },
  { name: 'naprawa drzwi', type: EventType.Event, value: -300, },
  { name: 'naprawa kran', type: EventType.Event, value: -150, },
  { name: 'mandat1', type: EventType.Event, value: -100, },
  { name: 'mandat2', type: EventType.Event, value: -200, },
  { name: 'mandat3', type: EventType.Event, value: -500, },
  { name: 'choroba1', type: EventType.Event, value: -200, },
  { name: 'choroba2', type: EventType.Event, value: -500, },
  { name: 'choroba3', type: EventType.Event, value: -1000, },
  { name: 'naprawa auta1', type: EventType.Event, value: -200, },
  { name: 'naprawa auta3', type: EventType.Event, value: -500, },
  { name: 'naprawa auta3', type: EventType.Event, value: -1000, },

  //purchases
  { name: 'toster', type: EventType.Purchase, value: 100, },
  { name: 'rolki', type: EventType.Purchase, value: 200, },
  { name: 'tv', type: EventType.Purchase, value: 1000, },
  { name: 'big TV', description: 'TV 120" musiales go miec', type: EventType.Purchase, value: 3000, },
  { name: 'lapek', type: EventType.Purchase, value: 2000, },
  { name: 'superlapek', type: EventType.Purchase, value: 6000, },
  { name: 'smartfon', type: EventType.Purchase, value: 500, },
  { name: 'supersmartfon', type: EventType.Purchase, value: 1500, },
  { name: 'auto', type: EventType.Purchase, value: 5000, },
  { name: 'superauto', type: EventType.Purchase, value: 15000, },
  { name: 'meble', type: EventType.Purchase, value: 5000, },
  { name: 'sofa', type: EventType.Purchase, value: 1500, },
  { name: 'fotel', type: EventType.Purchase, value: 500, },
  { name: 'wymiana okien', type: EventType.Purchase, value: 5000, },
  { name: 'dywan', type: EventType.Purchase, value: 200, },
  { name: 'gra1', type: EventType.Purchase, value: 50, },
  { name: 'gra2', type: EventType.Purchase, value: 100, },
  { name: 'gra3', type: EventType.Purchase, value: 150, },

  //small deals
  { name: 'szkolenie1', type: EventType.SmallDeal, value: 100, },
  { name: 'szkolenie2', type: EventType.SmallDeal, value: 500, },
  { name: 'szkolenie3', type: EventType.SmallDeal, value: 1000, },
  { name: 'kolekcja monet', type: EventType.SmallDeal, value: 5000, },
  { name: 'obraz1', type: EventType.SmallDeal, value: 1000, },
  { name: 'obraz2', type: EventType.SmallDeal, value: 2000, },
  { name: 'obraz3', type: EventType.SmallDeal, value: 5000, },
  // { name: 'pozyczka mala komus 1', type: EventType.SmallDeal, value: 100, },
  // { name: 'pozyczka mala komus 2', type: EventType.SmallDeal, value: 500, },
  // { name: 'pozyczka mala komus 3', type: EventType.SmallDeal, value: 1000, },

  //specialevents
  { name: 'strata pracy 1tura', type: EventType.SpecialEvent, value: -100, },//%
  { name: 'zmiana pracy na lepsza1', type: EventType.SpecialEvent, value: 10, percentable: true, },//%
  { name: 'zmiana pracy na lepsza2', type: EventType.SpecialEvent, value: 20, percentable: true, },//%
  { name: 'zmiana pracy na lepsza3', type: EventType.SpecialEvent, value: 30, percentable: true, },//%
  { name: 'zmiana pracy na gorsza1', type: EventType.SpecialEvent, value: -10, percentable: true, },//%
  { name: 'zmiana pracy na gorsza2', type: EventType.SpecialEvent, value: -20, percentable: true, },//%
  { name: 'zmiana pracy na gorsza3', type: EventType.SpecialEvent, value: -30, percentable: true, },//%

]
