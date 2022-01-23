import { IIncome } from './income.model';
import { EventType } from './event-type.enum';

export interface IEvent {
  name: string;
  description?: string; //make it nonnullable
  value: number;
  monthlyProfit?: number;
  type?: EventType
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
  { name: 'dzialkaRODOS', description: 'dzialkaRODOS', type: EventType.BigDeal, value: 10000, monthlyProfit: 1000, },
  { name: 'dzialkaRODOS', description: 'dzialkaRODOS', type: EventType.BigDeal, value: 10000, monthlyProfit: -1000, },
  { name: 'kawalerka', description: 'kawalerka', type: EventType.BigDeal, value: 150000, monthlyProfit: 1500, },
  { name: 'mieszkanie2pok', description: 'mieszkanie2pok', type: EventType.BigDeal, value: 225000, monthlyProfit: 2250, },
  { name: 'mieszkanie4pok', description: 'mieszkanie4pok', type: EventType.BigDeal, value: 300000, monthlyProfit: 3000, },
  { name: 'dzialka grunt', description: 'dzialka grunt', type: EventType.BigDeal, value: 100000, monthlyProfit: -100, },
  { name: 'domek letni', description: 'domek letni', type: EventType.BigDeal, value: 50000, monthlyProfit: -300, },
  { name: 'domek letni', description: 'domek letni', type: EventType.BigDeal, value: 50000, monthlyProfit: 300, },
  { name: 'maly dom', description: 'maly dom', type: EventType.BigDeal, value: 300000, monthlyProfit: 1500, },
  { name: 'sredni dom', description: 'sredni dom', type: EventType.BigDeal, value: 500000, monthlyProfit: 2500, },
  { name: 'duzy dom', description: 'duzy dom', type: EventType.BigDeal, value: 1000000, monthlyProfit: 10000, },
  { name: 'auto1', description: 'auto1', type: EventType.BigDeal, value: 5000, monthlyProfit: -500, },
  { name: 'auto2', description: 'auto2', type: EventType.BigDeal, value: 15000, monthlyProfit: -1500, },
  { name: 'auto3', description: 'auto3', type: EventType.BigDeal, value: 30000, monthlyProfit: -3000, },
  { name: 'garaz duzy', description: 'garaz duzy', type: EventType.BigDeal, value: 10000, monthlyProfit: -500, },
  { name: 'garaz maly', description: 'garaz maly', type: EventType.BigDeal, value: 25000, monthlyProfit: -1250, },
  { name: 'garaz duzy', description: 'garaz duzy', type: EventType.BigDeal, value: 10000, monthlyProfit: 500, },
  { name: 'garaz maly', description: 'garaz maly', type: EventType.BigDeal, value: 25000, monthlyProfit: 1250, },
  // { name: 'pozyczka duza komus 1', description: 'pozyczka duza komus 1', type: EventType.BigDeal, value: 10000, },
  // { name: 'pozyczka duza komus 2', description: 'pozyczka duza komus 2', type: EventType.BigDeal, value: 20000, },
  // { name: 'pozyczka duza komus 3', description: 'pozyczka duza komus 3', type: EventType.BigDeal, value: 50000, },

  //one time events in plus
  { name: 'wlasne urodziny', description: 'wlasne urodziny', type: EventType.Event, value: 500, },
  { name: 'szkolenie1podwyzka%', description: 'szkolenie1podwyzka%', type: EventType.Event, value: 10, percentable: true, },//%
  { name: 'szkolenie2podwyzka%', description: 'szkolenie2podwyzka%', type: EventType.Event, value: 20, percentable: true, },//%
  { name: 'szkolenie2podwyzka%', description: 'szkolenie2podwyzka%', type: EventType.Event, value: 30, percentable: true, },//%
  { name: 'wyprzedaz z domu cos1', description: 'wyprzedaz z domu cos1', type: EventType.Event, value: 100, },
  { name: 'wyprzedaz z domu cos2', description: 'wyprzedaz z domu cos2', type: EventType.Event, value: 200, },
  { name: 'wyprzedaz z domu cos3', description: 'wyprzedaz z domu cos3', type: EventType.Event, value: 500, },
  { name: 'fucha1', description: 'fucha1', type: EventType.Event, value: 100, },
  { name: 'fucha2', description: 'fucha2', type: EventType.Event, value: 500, },
  { name: 'fucha3', description: 'fucha3', type: EventType.Event, value: 1000, },

  // one time events minus
  { name: 'basen', description: 'basen', type: EventType.Event, value: -50, },
  { name: 'kino', description: 'kino', type: EventType.Event, value: -50, },
  { name: 'pizza', description: 'pizza', type: EventType.Event, value: -50, },
  { name: 'chinskie', description: 'chinskie', type: EventType.Event, value: -50, },
  { name: 'narty', description: 'narty', type: EventType.Event, value: -200, },
  { name: 'disco', description: 'disco', type: EventType.Event, value: -100, },
  { name: 'bezdomny kotek', description: 'bezdomny kotek', type: EventType.Event, value: -200, },
  { name: 'wesele', description: 'wesele', type: EventType.Event, value: -500, },
  { name: 'komunia', description: 'komunia', type: EventType.Event, value: -500, },
  { name: 'urodziny', description: 'urodziny', type: EventType.Event, value: -500, },
  { name: 'pogrzeb', description: 'pogrzeb', type: EventType.Event, value: -500, },
  { name: 'naprawa kran', description: 'naprawa kran', type: EventType.Event, value: -150, },
  { name: 'naprawa drzwi', description: 'naprawa drzwi', type: EventType.Event, value: -300, },
  { name: 'naprawa kran', description: 'naprawa kran', type: EventType.Event, value: -150, },
  { name: 'mandat1', description: 'mandat1', type: EventType.Event, value: -100, },
  { name: 'mandat2', description: 'mandat2', type: EventType.Event, value: -200, },
  { name: 'mandat3', description: 'mandat3', type: EventType.Event, value: -500, },
  { name: 'choroba1', description: 'choroba1', type: EventType.Event, value: -200, },
  { name: 'choroba2', description: 'choroba2', type: EventType.Event, value: -500, },
  { name: 'choroba3', description: 'choroba3', type: EventType.Event, value: -1000, },
  { name: 'naprawa auta1', description: 'naprawa auta1', type: EventType.Event, value: -200, },
  { name: 'naprawa auta3', description: 'naprawa auta3', type: EventType.Event, value: -500, },
  { name: 'naprawa auta3', description: 'naprawa auta3', type: EventType.Event, value: -1000, },

  //purchases
  { name: 'toster', description: 'toster', type: EventType.Purchase, value: 100, },
  { name: 'rolki', description: 'rolki', type: EventType.Purchase, value: 200, },
  { name: 'tv', description: 'tv', type: EventType.Purchase, value: 1000, },
  { name: 'big TV', description: 'TV 120" musiales go miec', type: EventType.Purchase, value: 3000, },
  { name: 'lapek', description: 'lapek', type: EventType.Purchase, value: 2000, },
  { name: 'superlapek', description: 'superlapek', type: EventType.Purchase, value: 6000, },
  { name: 'smartfon', description: 'smartfon', type: EventType.Purchase, value: 500, },
  { name: 'supersmartfon', description: 'supersmartfon', type: EventType.Purchase, value: 1500, },
  { name: 'auto', description: 'auto', type: EventType.Purchase, value: 5000, },
  { name: 'superauto', description: 'superauto', type: EventType.Purchase, value: 15000, },
  { name: 'meble', description: 'meble', type: EventType.Purchase, value: 5000, },
  { name: 'sofa', description: 'sofa', type: EventType.Purchase, value: 1500, },
  { name: 'fotel', description: 'fotel', type: EventType.Purchase, value: 500, },
  { name: 'wymiana okien', description: 'wymiana okien', type: EventType.Purchase, value: 5000, },
  { name: 'dywan', description: 'dywan', type: EventType.Purchase, value: 200, },
  { name: 'gra1', description: 'gra1', type: EventType.Purchase, value: 50, },
  { name: 'gra2', description: 'gra2', type: EventType.Purchase, value: 100, },
  { name: 'gra3', description: 'gra3', type: EventType.Purchase, value: 150, },

  //small deals
  { name: 'szkolenie1', description: 'szkolenie1', type: EventType.SmallDeal, value: 100, },
  { name: 'szkolenie2', description: 'szkolenie2', type: EventType.SmallDeal, value: 500, },
  { name: 'szkolenie3', description: 'szkolenie3', type: EventType.SmallDeal, value: 1000, },
  { name: 'kolekcja monet', description: 'kolekcja monet', type: EventType.SmallDeal, value: 5000, },
  { name: 'obraz1', description: 'obraz1', type: EventType.SmallDeal, value: 1000, },
  { name: 'obraz2', description: 'obraz2', type: EventType.SmallDeal, value: 2000, },
  { name: 'obraz3', description: 'obraz3', type: EventType.SmallDeal, value: 5000, },
  // { name: 'pozyczka mala komus 1', description: 'pozyczka mala komus 1', type: EventType.SmallDeal, value: 100, },
  // { name: 'pozyczka mala komus 2', description: 'pozyczka mala komus 2', type: EventType.SmallDeal, value: 500, },
  // { name: 'pozyczka mala komus 3', description: 'pozyczka mala komus 3', type: EventType.SmallDeal, value: 1000, },

  //specialevents
  { name: 'strata pracy 1tura', description: 'strata pracy 1tura', type: EventType.SpecialEvent, value: -100, },//%
  { name: 'zmiana pracy na lepsza1', description: 'zmiana pracy na lepsza1', type: EventType.SpecialEvent, value: 10, percentable: true, },//%
  { name: 'zmiana pracy na lepsza2', description: 'zmiana pracy na lepsza2', type: EventType.SpecialEvent, value: 20, percentable: true, },//%
  { name: 'zmiana pracy na lepsza3', description: 'zmiana pracy na lepsza3', type: EventType.SpecialEvent, value: 30, percentable: true, },//%
  { name: 'zmiana pracy na gorsza1', description: 'zmiana pracy na gorsza1', type: EventType.SpecialEvent, value: -10, percentable: true, },//%
  { name: 'zmiana pracy na gorsza2', description: 'zmiana pracy na gorsza2', type: EventType.SpecialEvent, value: -20, percentable: true, },//%
  { name: 'zmiana pracy na gorsza3', description: 'zmiana pracy na gorsza3', type: EventType.SpecialEvent, value: -30, percentable: true, },//%

]
