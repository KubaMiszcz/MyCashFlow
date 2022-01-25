import { IIncome } from './income.model';
import { EventTypeEnum } from './event-type.enum';

export interface IEvent {
  id: number;
  name: string;
  description: string;
  value: number;
  monthlyProfit?: number;
  type?: EventTypeEnum
  image?: string;
  rejectable?: boolean;
  percentable?: boolean;
}


export class Event implements IEvent {
  id: number;
  description: string;
  monthlyProfit?: number | undefined;
  type?: EventTypeEnum | undefined;
  image?: string | undefined;
  rejectable?: boolean | undefined;
  percentable?: boolean | undefined;
  name: string;
  value: number;
}

export const ALL_EVENTS_LIST: IEvent[] = [
  // { name: 'Wydatki domowe', value: (-1 * player.job.salary * this.personalExpensesRate) });
  { id: -1, name: "Wypłata", description: "Z roboty, co miesiac, jak to wyplata", type: EventTypeEnum.SmallDeal, value: 0, monthlyProfit: 0, },
  { id: -2, name: "Wydatki domowe", description: "Zwykle drobne wydatki domowe, jedzonko, bulki, serek, zimjoki...", type: EventTypeEnum.SmallDeal, value: 0, monthlyProfit: 0, },


  //big deals
  { id: 1, name: "dzialkaRODOS", description: "dzialkaRODOS", type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: 1000, rejectable: true, },
  { id: 2, name: "dzialkaRODOS", description: "dzialkaRODOS", type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: -1000, rejectable: true, },
  { id: 3, name: "kawalerka", description: "kawalerka", type: EventTypeEnum.BigDeal, value: 150000, monthlyProfit: 1500, rejectable: true, },
  { id: 4, name: "mieszkanie2pok", description: "mieszkanie2pok", type: EventTypeEnum.BigDeal, value: 225000, monthlyProfit: 2250, rejectable: true, },
  { id: 5, name: "mieszkanie4pok", description: "mieszkanie4pok", type: EventTypeEnum.BigDeal, value: 300000, monthlyProfit: 3000, rejectable: true, },
  { id: 6, name: "dzialka grunt", description: "dzialka grunt", type: EventTypeEnum.BigDeal, value: 100000, monthlyProfit: -100, rejectable: true, },
  { id: 7, name: "domek letni", description: "domek letni", type: EventTypeEnum.BigDeal, value: 50000, monthlyProfit: -300, rejectable: true, },
  { id: 8, name: "domek letni", description: "domek letni", type: EventTypeEnum.BigDeal, value: 50000, monthlyProfit: 300, rejectable: true, },
  { id: 9, name: "maly dom", description: "maly dom", type: EventTypeEnum.BigDeal, value: 300000, monthlyProfit: 1500, rejectable: true, },
  { id: 10, name: "sredni dom", description: "sredni dom", type: EventTypeEnum.BigDeal, value: 500000, monthlyProfit: 2500, rejectable: true, },
  { id: 11, name: "duzy dom", description: "duzy dom", type: EventTypeEnum.BigDeal, value: 1000000, monthlyProfit: 10000, rejectable: true, },
  { id: 12, name: "auto1", description: "auto1", type: EventTypeEnum.BigDeal, value: 5000, monthlyProfit: -500, rejectable: true, },
  { id: 13, name: "auto2", description: "auto2", type: EventTypeEnum.BigDeal, value: 15000, monthlyProfit: -1500, rejectable: true, },
  { id: 14, name: "auto3", description: "auto3", type: EventTypeEnum.BigDeal, value: 30000, monthlyProfit: -3000, rejectable: true, },
  { id: 15, name: "garaz duzy", description: "garaz duzy", type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: -500, rejectable: true, },
  { id: 16, name: "garaz maly", description: "garaz maly", type: EventTypeEnum.BigDeal, value: 25000, monthlyProfit: -1250, rejectable: true, },
  { id: 17, name: "garaz duzy", description: "garaz duzy", type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: 500, rejectable: true, },
  { id: 18, name: "garaz maly", description: "garaz maly", type: EventTypeEnum.BigDeal, value: 25000, monthlyProfit: 1250, rejectable: true, },
  // { name: 'pozyczka duza komus 1', description: 'pozyczka duza komus 1', type: EventType.BigDeal, value: 10000, rejectable:true},
  // { name: 'pozyczka duza komus 2', description: 'pozyczka duza komus 2', type: EventType.BigDeal, value: 20000, rejectable:true},
  // { name: 'pozyczka duza komus 3', description: 'pozyczka duza komus 3', type: EventType.BigDeal, value: 50000, rejectable:true},

  //one time events in plus
  { id: 19, name: "wlasne urodziny", description: "wlasne urodziny", type: EventTypeEnum.Event, value: 500, },
  { id: 20, name: "wyprzedaz z domu cos1", description: "wyprzedaz z domu cos1", type: EventTypeEnum.Event, value: 100, },
  { id: 21, name: "wyprzedaz z domu cos2", description: "wyprzedaz z domu cos2", type: EventTypeEnum.Event, value: 200, },
  { id: 22, name: "wyprzedaz z domu cos3", description: "wyprzedaz z domu cos3", type: EventTypeEnum.Event, value: 500, },
  { id: 23, name: "fucha1", description: "fucha1", type: EventTypeEnum.Event, value: 100, },
  { id: 24, name: "fucha2", description: "fucha2", type: EventTypeEnum.Event, value: 500, },
  { id: 25, name: "fucha3", description: "fucha3", type: EventTypeEnum.Event, value: 1000, },
  // { name: 'szkolenie1podwyzka%', description: 'szkolenie1podwyzka%', type: EventTypeEnum.Event, value: 10, percentable: true, },//%
  // { name: 'szkolenie2podwyzka%', description: 'szkolenie2podwyzka%', type: EventTypeEnum.Event, value: 20, percentable: true, },//%
  // { name: 'szkolenie2podwyzka%', description: 'szkolenie2podwyzka%', type: EventTypeEnum.Event, value: 30, percentable: true, },//%

  // one time events minus
  { id: 26, name: "basen", description: "basen", type: EventTypeEnum.Event, value: -50, },
  { id: 27, name: "kino", description: "kino", type: EventTypeEnum.Event, value: -50, },
  { id: 28, name: "pizza", description: "pizza", type: EventTypeEnum.Event, value: -50, },
  { id: 29, name: "chinskie", description: "chinskie", type: EventTypeEnum.Event, value: -50, },
  { id: 30, name: "narty", description: "narty", type: EventTypeEnum.Event, value: -200, },
  { id: 31, name: "disco", description: "disco", type: EventTypeEnum.Event, value: -100, },
  { id: 32, name: "bezdomny kotek", description: "bezdomny kotek", type: EventTypeEnum.Event, value: -200, },
  { id: 33, name: "wesele", description: "wesele", type: EventTypeEnum.Event, value: -500, },
  { id: 34, name: "komunia", description: "komunia", type: EventTypeEnum.Event, value: -500, },
  { id: 35, name: "urodziny", description: "urodziny", type: EventTypeEnum.Event, value: -500, },
  { id: 36, name: "pogrzeb", description: "pogrzeb", type: EventTypeEnum.Event, value: -500, },
  { id: 37, name: "naprawa kran", description: "naprawa kran", type: EventTypeEnum.Event, value: -150, },
  { id: 38, name: "naprawa drzwi", description: "naprawa drzwi", type: EventTypeEnum.Event, value: -300, },
  { id: 39, name: "naprawa kran", description: "naprawa kran", type: EventTypeEnum.Event, value: -150, },
  { id: 40, name: "mandat1", description: "mandat1", type: EventTypeEnum.Event, value: -100, },
  { id: 41, name: "mandat2", description: "mandat2", type: EventTypeEnum.Event, value: -200, },
  { id: 42, name: "mandat3", description: "mandat3", type: EventTypeEnum.Event, value: -500, },
  { id: 43, name: "choroba1", description: "choroba1", type: EventTypeEnum.Event, value: -200, },
  { id: 44, name: "choroba2", description: "choroba2", type: EventTypeEnum.Event, value: -500, },
  { id: 45, name: "choroba3", description: "choroba3", type: EventTypeEnum.Event, value: -1000, },
  { id: 46, name: "naprawa auta1", description: "naprawa auta1", type: EventTypeEnum.Event, value: -200, },
  { id: 47, name: "naprawa auta3", description: "naprawa auta3", type: EventTypeEnum.Event, value: -500, },
  { id: 48, name: "naprawa auta3", description: "naprawa auta3", type: EventTypeEnum.Event, value: -1000, },

  //purchases
  { id: 49, name: "toster", description: "toster", type: EventTypeEnum.Purchase, value: 100, },
  { id: 50, name: "rolki", description: "rolki", type: EventTypeEnum.Purchase, value: 200, },
  { id: 51, name: "tv", description: "tv", type: EventTypeEnum.Purchase, value: 1000, },
  { id: 52, name: "big TV", description: "TV 120\" musiales go miec", type: EventTypeEnum.Purchase, value: 3000, },
  { id: 53, name: "lapek", description: "lapek", type: EventTypeEnum.Purchase, value: 2000, },
  { id: 54, name: "superlapek", description: "superlapek", type: EventTypeEnum.Purchase, value: 6000, },
  { id: 55, name: "smartfon", description: "smartfon", type: EventTypeEnum.Purchase, value: 500, },
  { id: 56, name: "supersmartfon", description: "supersmartfon", type: EventTypeEnum.Purchase, value: 1500, },
  { id: 57, name: "auto", description: "auto", type: EventTypeEnum.Purchase, value: 5000, },
  { id: 58, name: "superauto", description: "superauto", type: EventTypeEnum.Purchase, value: 15000, },
  { id: 59, name: "meble", description: "meble", type: EventTypeEnum.Purchase, value: 5000, },
  { id: 60, name: "sofa", description: "sofa", type: EventTypeEnum.Purchase, value: 1500, },
  { id: 61, name: "fotel", description: "fotel", type: EventTypeEnum.Purchase, value: 500, },
  { id: 62, name: "wymiana okien", description: "wymiana okien", type: EventTypeEnum.Purchase, value: 5000, },
  { id: 63, name: "dywan", description: "dywan", type: EventTypeEnum.Purchase, value: 200, },
  { id: 64, name: "gra1", description: "gra1", type: EventTypeEnum.Purchase, value: 50, },
  { id: 65, name: "gra2", description: "gra2", type: EventTypeEnum.Purchase, value: 100, },
  { id: 66, name: "gra3", description: "gra3", type: EventTypeEnum.Purchase, value: 150, },

  //small deals
  { id: 67, name: "szkolenie1", description: "szkolenie1", type: EventTypeEnum.SmallDeal, value: 100, rejectable: true, },
  { id: 68, name: "szkolenie2", description: "szkolenie2", type: EventTypeEnum.SmallDeal, value: 500, rejectable: true, },
  { id: 69, name: "szkolenie3", description: "szkolenie3", type: EventTypeEnum.SmallDeal, value: 1000, rejectable: true, },
  { id: 70, name: "kolekcja monet", description: "kolekcja monet", type: EventTypeEnum.SmallDeal, value: 5000, rejectable: true, },
  { id: 71, name: "obraz1", description: "obraz1", type: EventTypeEnum.SmallDeal, value: 1000, rejectable: true, },
  { id: 72, name: "obraz2", description: "obraz2", type: EventTypeEnum.SmallDeal, value: 2000, rejectable: true, },
  { id: 73, name: "obraz3", description: "obraz3", type: EventTypeEnum.SmallDeal, value: 5000, rejectable: true, },

  // { name: 'pozyczka mala komus 1', description: 'pozyczka mala komus 1', type: EventType.SmallDeal, value: 100, rejectable:true},
  // { name: 'pozyczka mala komus 2', description: 'pozyczka mala komus 2', type: EventType.SmallDeal, value: 500, rejectable:true},
  // { name: 'pozyczka mala komus 3', description: 'pozyczka mala komus 3', type: EventType.SmallDeal, value: 1000, rejectable:true},

  //specialevents
  // { name: 'strata pracy 1tura', description: 'strata pracy 1tura', type: EventTypeEnum.SpecialEvent, value: -100, },//%
  // { name: 'zmiana pracy na lepsza1', description: 'zmiana pracy na lepsza1', type: EventTypeEnum.SpecialEvent, value: 10, percentable: true, },//%
  // { name: 'zmiana pracy na lepsza2', description: 'zmiana pracy na lepsza2', type: EventTypeEnum.SpecialEvent, value: 20, percentable: true, },//%
  // { name: 'zmiana pracy na lepsza3', description: 'zmiana pracy na lepsza3', type: EventTypeEnum.SpecialEvent, value: 30, percentable: true, },//%
  // { name: 'zmiana pracy na gorsza1', description: 'zmiana pracy na gorsza1', type: EventTypeEnum.SpecialEvent, value: -10, percentable: true, },//%
  // { name: 'zmiana pracy na gorsza2', description: 'zmiana pracy na gorsza2', type: EventTypeEnum.SpecialEvent, value: -20, percentable: true, },//%
  // { name: 'zmiana pracy na gorsza3', description: 'zmiana pracy na gorsza3', type: EventTypeEnum.SpecialEvent, value: -30, percentable: true, },//%

]

