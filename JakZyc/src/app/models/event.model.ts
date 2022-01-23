import { IIncome } from './income.model';
import { EventTypeEnum } from './event-type.enum';

export interface IEvent {
  name: string;
  description?: string; //make it nonnullable
  value: number;
  monthlyProfit?: number;
  type?: EventTypeEnum
  image?: string;
  rejectable?: boolean;
  percentable?: boolean;
}


export class Event implements IEvent {
  name = '';
  value = 0;
}

export const EVENTS: IEvent[] = [
  //big deals
  { name: 'dzialkaRODOS', description: 'dzialkaRODOS', type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: 1000, },
  { name: 'dzialkaRODOS', description: 'dzialkaRODOS', type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: -1000, },
  { name: 'kawalerka', description: 'kawalerka', type: EventTypeEnum.BigDeal, value: 150000, monthlyProfit: 1500, },
  { name: 'mieszkanie2pok', description: 'mieszkanie2pok', type: EventTypeEnum.BigDeal, value: 225000, monthlyProfit: 2250, },
  { name: 'mieszkanie4pok', description: 'mieszkanie4pok', type: EventTypeEnum.BigDeal, value: 300000, monthlyProfit: 3000, },
  { name: 'dzialka grunt', description: 'dzialka grunt', type: EventTypeEnum.BigDeal, value: 100000, monthlyProfit: -100, },
  { name: 'domek letni', description: 'domek letni', type: EventTypeEnum.BigDeal, value: 50000, monthlyProfit: -300, },
  { name: 'domek letni', description: 'domek letni', type: EventTypeEnum.BigDeal, value: 50000, monthlyProfit: 300, },
  { name: 'maly dom', description: 'maly dom', type: EventTypeEnum.BigDeal, value: 300000, monthlyProfit: 1500, },
  { name: 'sredni dom', description: 'sredni dom', type: EventTypeEnum.BigDeal, value: 500000, monthlyProfit: 2500, },
  { name: 'duzy dom', description: 'duzy dom', type: EventTypeEnum.BigDeal, value: 1000000, monthlyProfit: 10000, },
  { name: 'auto1', description: 'auto1', type: EventTypeEnum.BigDeal, value: 5000, monthlyProfit: -500, },
  { name: 'auto2', description: 'auto2', type: EventTypeEnum.BigDeal, value: 15000, monthlyProfit: -1500, },
  { name: 'auto3', description: 'auto3', type: EventTypeEnum.BigDeal, value: 30000, monthlyProfit: -3000, },
  { name: 'garaz duzy', description: 'garaz duzy', type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: -500, },
  { name: 'garaz maly', description: 'garaz maly', type: EventTypeEnum.BigDeal, value: 25000, monthlyProfit: -1250, },
  { name: 'garaz duzy', description: 'garaz duzy', type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: 500, },
  { name: 'garaz maly', description: 'garaz maly', type: EventTypeEnum.BigDeal, value: 25000, monthlyProfit: 1250, },
  // { name: 'pozyczka duza komus 1', description: 'pozyczka duza komus 1', type: EventType.BigDeal, value: 10000, },
  // { name: 'pozyczka duza komus 2', description: 'pozyczka duza komus 2', type: EventType.BigDeal, value: 20000, },
  // { name: 'pozyczka duza komus 3', description: 'pozyczka duza komus 3', type: EventType.BigDeal, value: 50000, },

  //one time events in plus
  { name: 'wlasne urodziny', description: 'wlasne urodziny', type: EventTypeEnum.Event, value: 500, },
  { name: 'szkolenie1podwyzka%', description: 'szkolenie1podwyzka%', type: EventTypeEnum.Event, value: 10, percentable: true, },//%
  { name: 'szkolenie2podwyzka%', description: 'szkolenie2podwyzka%', type: EventTypeEnum.Event, value: 20, percentable: true, },//%
  { name: 'szkolenie2podwyzka%', description: 'szkolenie2podwyzka%', type: EventTypeEnum.Event, value: 30, percentable: true, },//%
  { name: 'wyprzedaz z domu cos1', description: 'wyprzedaz z domu cos1', type: EventTypeEnum.Event, value: 100, },
  { name: 'wyprzedaz z domu cos2', description: 'wyprzedaz z domu cos2', type: EventTypeEnum.Event, value: 200, },
  { name: 'wyprzedaz z domu cos3', description: 'wyprzedaz z domu cos3', type: EventTypeEnum.Event, value: 500, },
  { name: 'fucha1', description: 'fucha1', type: EventTypeEnum.Event, value: 100, },
  { name: 'fucha2', description: 'fucha2', type: EventTypeEnum.Event, value: 500, },
  { name: 'fucha3', description: 'fucha3', type: EventTypeEnum.Event, value: 1000, },

  // one time events minus
  { name: 'basen', description: 'basen', type: EventTypeEnum.Event, value: -50, },
  { name: 'kino', description: 'kino', type: EventTypeEnum.Event, value: -50, },
  { name: 'pizza', description: 'pizza', type: EventTypeEnum.Event, value: -50, },
  { name: 'chinskie', description: 'chinskie', type: EventTypeEnum.Event, value: -50, },
  { name: 'narty', description: 'narty', type: EventTypeEnum.Event, value: -200, },
  { name: 'disco', description: 'disco', type: EventTypeEnum.Event, value: -100, },
  { name: 'bezdomny kotek', description: 'bezdomny kotek', type: EventTypeEnum.Event, value: -200, },
  { name: 'wesele', description: 'wesele', type: EventTypeEnum.Event, value: -500, },
  { name: 'komunia', description: 'komunia', type: EventTypeEnum.Event, value: -500, },
  { name: 'urodziny', description: 'urodziny', type: EventTypeEnum.Event, value: -500, },
  { name: 'pogrzeb', description: 'pogrzeb', type: EventTypeEnum.Event, value: -500, },
  { name: 'naprawa kran', description: 'naprawa kran', type: EventTypeEnum.Event, value: -150, },
  { name: 'naprawa drzwi', description: 'naprawa drzwi', type: EventTypeEnum.Event, value: -300, },
  { name: 'naprawa kran', description: 'naprawa kran', type: EventTypeEnum.Event, value: -150, },
  { name: 'mandat1', description: 'mandat1', type: EventTypeEnum.Event, value: -100, },
  { name: 'mandat2', description: 'mandat2', type: EventTypeEnum.Event, value: -200, },
  { name: 'mandat3', description: 'mandat3', type: EventTypeEnum.Event, value: -500, },
  { name: 'choroba1', description: 'choroba1', type: EventTypeEnum.Event, value: -200, },
  { name: 'choroba2', description: 'choroba2', type: EventTypeEnum.Event, value: -500, },
  { name: 'choroba3', description: 'choroba3', type: EventTypeEnum.Event, value: -1000, },
  { name: 'naprawa auta1', description: 'naprawa auta1', type: EventTypeEnum.Event, value: -200, },
  { name: 'naprawa auta3', description: 'naprawa auta3', type: EventTypeEnum.Event, value: -500, },
  { name: 'naprawa auta3', description: 'naprawa auta3', type: EventTypeEnum.Event, value: -1000, },

  //purchases
  { name: 'toster', description: 'toster', type: EventTypeEnum.Purchase, value: 100, },
  { name: 'rolki', description: 'rolki', type: EventTypeEnum.Purchase, value: 200, },
  { name: 'tv', description: 'tv', type: EventTypeEnum.Purchase, value: 1000, },
  { name: 'big TV', description: 'TV 120" musiales go miec', type: EventTypeEnum.Purchase, value: 3000, },
  { name: 'lapek', description: 'lapek', type: EventTypeEnum.Purchase, value: 2000, },
  { name: 'superlapek', description: 'superlapek', type: EventTypeEnum.Purchase, value: 6000, },
  { name: 'smartfon', description: 'smartfon', type: EventTypeEnum.Purchase, value: 500, },
  { name: 'supersmartfon', description: 'supersmartfon', type: EventTypeEnum.Purchase, value: 1500, },
  { name: 'auto', description: 'auto', type: EventTypeEnum.Purchase, value: 5000, },
  { name: 'superauto', description: 'superauto', type: EventTypeEnum.Purchase, value: 15000, },
  { name: 'meble', description: 'meble', type: EventTypeEnum.Purchase, value: 5000, },
  { name: 'sofa', description: 'sofa', type: EventTypeEnum.Purchase, value: 1500, },
  { name: 'fotel', description: 'fotel', type: EventTypeEnum.Purchase, value: 500, },
  { name: 'wymiana okien', description: 'wymiana okien', type: EventTypeEnum.Purchase, value: 5000, },
  { name: 'dywan', description: 'dywan', type: EventTypeEnum.Purchase, value: 200, },
  { name: 'gra1', description: 'gra1', type: EventTypeEnum.Purchase, value: 50, },
  { name: 'gra2', description: 'gra2', type: EventTypeEnum.Purchase, value: 100, },
  { name: 'gra3', description: 'gra3', type: EventTypeEnum.Purchase, value: 150, },

  //small deals
  { name: 'szkolenie1', description: 'szkolenie1', type: EventTypeEnum.SmallDeal, value: 100, },
  { name: 'szkolenie2', description: 'szkolenie2', type: EventTypeEnum.SmallDeal, value: 500, },
  { name: 'szkolenie3', description: 'szkolenie3', type: EventTypeEnum.SmallDeal, value: 1000, },
  { name: 'kolekcja monet', description: 'kolekcja monet', type: EventTypeEnum.SmallDeal, value: 5000, },
  { name: 'obraz1', description: 'obraz1', type: EventTypeEnum.SmallDeal, value: 1000, },
  { name: 'obraz2', description: 'obraz2', type: EventTypeEnum.SmallDeal, value: 2000, },
  { name: 'obraz3', description: 'obraz3', type: EventTypeEnum.SmallDeal, value: 5000, },
  // { name: 'pozyczka mala komus 1', description: 'pozyczka mala komus 1', type: EventType.SmallDeal, value: 100, },
  // { name: 'pozyczka mala komus 2', description: 'pozyczka mala komus 2', type: EventType.SmallDeal, value: 500, },
  // { name: 'pozyczka mala komus 3', description: 'pozyczka mala komus 3', type: EventType.SmallDeal, value: 1000, },

  //specialevents
  { name: 'strata pracy 1tura', description: 'strata pracy 1tura', type: EventTypeEnum.SpecialEvent, value: -100, },//%
  { name: 'zmiana pracy na lepsza1', description: 'zmiana pracy na lepsza1', type: EventTypeEnum.SpecialEvent, value: 10, percentable: true, },//%
  { name: 'zmiana pracy na lepsza2', description: 'zmiana pracy na lepsza2', type: EventTypeEnum.SpecialEvent, value: 20, percentable: true, },//%
  { name: 'zmiana pracy na lepsza3', description: 'zmiana pracy na lepsza3', type: EventTypeEnum.SpecialEvent, value: 30, percentable: true, },//%
  { name: 'zmiana pracy na gorsza1', description: 'zmiana pracy na gorsza1', type: EventTypeEnum.SpecialEvent, value: -10, percentable: true, },//%
  { name: 'zmiana pracy na gorsza2', description: 'zmiana pracy na gorsza2', type: EventTypeEnum.SpecialEvent, value: -20, percentable: true, },//%
  { name: 'zmiana pracy na gorsza3', description: 'zmiana pracy na gorsza3', type: EventTypeEnum.SpecialEvent, value: -30, percentable: true, },//%

]
