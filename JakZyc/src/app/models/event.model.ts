import { EventTypeEnum } from './constants/event-type.enum';

export interface IEvent {
  id: number;
  name: string;
  description: string;
  value: number;
  monthlyProfit?: number;
  type?: EventTypeEnum
  image?: string;
  isRejectable?: boolean;
  isValuePercentable?: boolean;
}


export class Event implements IEvent {
  id: number;
  description: string;
  monthlyProfit?: number | undefined;
  type?: EventTypeEnum | undefined;
  image?: string | undefined;
  isRejectable?: boolean | undefined;
  isValuePercentable?: boolean | undefined;
  name: string;
  value: number;
}

export const ALL_EVENTS_LIST: IEvent[] = [
  // { name: 'Wydatki domowe', value: (-1 * player.job.salary * this.personalExpensesRate) });
  { id: -1, name: "Wypłata", description: "Z roboty, co miesiac, jak to wyplata", type: EventTypeEnum.SmallDeal, value: 0, monthlyProfit: 0, },
  { id: -2, name: "Wydatki domowe", description: "Zwykle drobne wydatki domowe, jedzonko, bulki, serek, zimjoki...", type: EventTypeEnum.SmallDeal, value: 0, monthlyProfit: 0, },

  //VerySpecialEvents
  { id: -3, name: "Masz urodziny", description: "Kasiurka od znajomych na urodziny;]", type: EventTypeEnum.Event, value: 500, },
  { id: -4, name: "Masz Urodziny", description: "Kasiurka od Wujka z Ameryki;]", type: EventTypeEnum.Event, value: 2000, },


  //////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  //big deals
  { id: 1, name: "Dzialka RODOS", description: "Dzialka RODOS na wynajem", type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: 1000, isRejectable: true, },
  { id: 2, name: "Dzialka RODOS", description: "Moze by tak poryl w gruncie na weekendy?", type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: -1000, isRejectable: true, },
  { id: 3, name: "Kawalerka", description: "Kawalerka na wynajem", type: EventTypeEnum.BigDeal, value: 150000, monthlyProfit: 1500, isRejectable: true, },
  { id: 4, name: "Mieszkanie 2 pokoje", description: "2 pokojowe mieszkanie na wynajem", type: EventTypeEnum.BigDeal, value: 225000, monthlyProfit: 2250, isRejectable: true, },
  { id: 5, name: "Mieszkanie 4 pokoje", description: "4 pokojowe mieszkanie na wynajem", type: EventTypeEnum.BigDeal, value: 300000, monthlyProfit: 3000, isRejectable: true, },
  { id: 6, name: "Dzialka grunt", description: "Dzialka grunt", type: EventTypeEnum.BigDeal, value: 100000, monthlyProfit: -100, isRejectable: true, },
  { id: 7, name: "Domek letni", description: "Domek letni", type: EventTypeEnum.BigDeal, value: 50000, monthlyProfit: -300, isRejectable: true, },
  { id: 8, name: "Domek letni", description: "Domek letni", type: EventTypeEnum.BigDeal, value: 50000, monthlyProfit: 300, isRejectable: true, },
  { id: 9, name: "Maly dom", description: "Maly dom", type: EventTypeEnum.BigDeal, value: 300000, monthlyProfit: 1500, isRejectable: true, },
  { id: 10, name: "Sredni dom", description: "Sredni dom", type: EventTypeEnum.BigDeal, value: 500000, monthlyProfit: 2500, isRejectable: true, },
  { id: 11, name: "Duzy dom", description: "Duzy dom", type: EventTypeEnum.BigDeal, value: 1000000, monthlyProfit: 10000, isRejectable: true, },
  { id: 12, name: "Auto1", description: "Auto1", type: EventTypeEnum.BigDeal, value: 5000, monthlyProfit: -500, isRejectable: true, },
  { id: 13, name: "Auto2", description: "Auto2", type: EventTypeEnum.BigDeal, value: 15000, monthlyProfit: -1500, isRejectable: true, },
  { id: 14, name: "Auto3", description: "Auto3", type: EventTypeEnum.BigDeal, value: 30000, monthlyProfit: -3000, isRejectable: true, },
  { id: 15, name: "Garaz duzy", description: "Garaz duzy", type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: -500, isRejectable: true, },
  { id: 16, name: "Garaz maly", description: "Garaz maly", type: EventTypeEnum.BigDeal, value: 25000, monthlyProfit: -1250, isRejectable: true, },
  { id: 17, name: "Garaz duzy", description: "Garaz duzy", type: EventTypeEnum.BigDeal, value: 10000, monthlyProfit: 500, isRejectable: true, },
  { id: 18, name: "Garaz maly", description: "Garaz maly", type: EventTypeEnum.BigDeal, value: 25000, monthlyProfit: 1250, isRejectable: true, },
  // { name: 'pozyczka duza komus 1', description: 'pozyczka duza komus 1', type: EventType.BigDeal, value: 10000, rejectable:true},
  // { name: 'pozyczka duza komus 2', description: 'pozyczka duza komus 2', type: EventType.BigDeal, value: 20000, rejectable:true},
  // { name: 'pozyczka duza komus 3', description: 'pozyczka duza komus 3', type: EventType.BigDeal, value: 50000, rejectable:true},

  //one time events in plus
  { id: 20, name: "Wyprzedaz z domu cos1", description: "Wyprzedaz z domu cos1", type: EventTypeEnum.Event, value: 100, },
  { id: 21, name: "Wyprzedaz z domu cos2", description: "Wyprzedaz z domu cos2", type: EventTypeEnum.Event, value: 200, },
  { id: 22, name: "Wyprzedaz z domu cos3", description: "Wyprzedaz z domu cos3", type: EventTypeEnum.Event, value: 500, },
  { id: 23, name: "Fucha1", description: "Fucha1", type: EventTypeEnum.Event, value: 100, },
  { id: 24, name: "Fucha2", description: "Fucha2", type: EventTypeEnum.Event, value: 500, },
  { id: 25, name: "Fucha3", description: "Fucha3", type: EventTypeEnum.Event, value: 1000, },
  // { name: 'szkolenie1podwyzka%', description: 'szkolenie1podwyzka%', type: EventTypeEnum.Event, value: 10, percentable: true, },//%
  // { name: 'szkolenie2podwyzka%', description: 'szkolenie2podwyzka%', type: EventTypeEnum.Event, value: 20, percentable: true, },//%
  // { name: 'szkolenie2podwyzka%', description: 'szkolenie2podwyzka%', type: EventTypeEnum.Event, value: 30, percentable: true, },//%

  // one time events minus
  { id: 26, name: "Basen", description: "Basen", type: EventTypeEnum.Event, value: -50, },
  { id: 27, name: "Kino", description: "Kino", type: EventTypeEnum.Event, value: -50, },
  { id: 28, name: "Pizza", description: "Pizza", type: EventTypeEnum.Event, value: -50, },
  { id: 29, name: "Chinskie", description: "Chinskie", type: EventTypeEnum.Event, value: -50, },
  { id: 30, name: "Narty", description: "Narty", type: EventTypeEnum.Event, value: -200, },
  { id: 31, name: "Disco", description: "Disco", type: EventTypeEnum.Event, value: -100, },
  { id: 32, name: "Bezdomny kotek", description: "Bezdomny kotek", type: EventTypeEnum.Event, value: -200, },
  { id: 33, name: "Wesele", description: "Wesele", type: EventTypeEnum.Event, value: -500, },
  { id: 34, name: "Komunia", description: "Komunia", type: EventTypeEnum.Event, value: -500, },
  { id: 35, name: "Urodziny", description: "Urodziny", type: EventTypeEnum.Event, value: -500, },
  { id: 36, name: "Pogrzeb", description: "Pogrzeb", type: EventTypeEnum.Event, value: -500, },
  { id: 37, name: "Naprawa kran", description: "Naprawa kran", type: EventTypeEnum.Event, value: -150, },
  { id: 38, name: "Naprawa drzwi", description: "Naprawa drzwi", type: EventTypeEnum.Event, value: -300, },
  { id: 39, name: "Naprawa kran", description: "Naprawa kran", type: EventTypeEnum.Event, value: -150, },
  { id: 40, name: "Mandat1", description: "Mandat1", type: EventTypeEnum.Event, value: -100, },
  { id: 41, name: "Mandat2", description: "Mandat2", type: EventTypeEnum.Event, value: -200, },
  { id: 42, name: "Mandat3", description: "Mandat3", type: EventTypeEnum.Event, value: -500, },
  { id: 43, name: "Choroba1", description: "Choroba1", type: EventTypeEnum.Event, value: -200, },
  { id: 44, name: "Choroba2", description: "Choroba2", type: EventTypeEnum.Event, value: -500, },
  { id: 45, name: "Choroba3", description: "Choroba3", type: EventTypeEnum.Event, value: -1000, },
  { id: 46, name: "Naprawa auta1", description: "Naprawa auta1", type: EventTypeEnum.Event, value: -200, },
  { id: 47, name: "Naprawa auta3", description: "Naprawa auta3", type: EventTypeEnum.Event, value: -500, },
  { id: 48, name: "Naprawa auta3", description: "Naprawa auta3", type: EventTypeEnum.Event, value: -1000, },

  //purchases
  { id: 49, name: "Toster", description: "Toster", type: EventTypeEnum.Purchase, value: 100, },
  { id: 50, name: "Rolki", description: "Rolki", type: EventTypeEnum.Purchase, value: 200, },
  { id: 51, name: "Tv", description: "Tv", type: EventTypeEnum.Purchase, value: 1000, },
  { id: 52, name: "Big TV", description: "TV 120\" musiales go miec", type: EventTypeEnum.Purchase, value: 3000, },
  { id: 53, name: "Lapek", description: "Lapek", type: EventTypeEnum.Purchase, value: 2000, },
  { id: 54, name: "Superlapek", description: "Superlapek", type: EventTypeEnum.Purchase, value: 6000, },
  { id: 55, name: "Smartfon", description: "Smartfon", type: EventTypeEnum.Purchase, value: 500, },
  { id: 56, name: "Supersmartfon", description: "Supersmartfon", type: EventTypeEnum.Purchase, value: 1500, },
  { id: 57, name: "Auto", description: "Auto", type: EventTypeEnum.Purchase, value: 5000, },
  { id: 58, name: "Superauto", description: "Superauto", type: EventTypeEnum.Purchase, value: 15000, },
  { id: 59, name: "Meble", description: "Meble", type: EventTypeEnum.Purchase, value: 5000, },
  { id: 60, name: "Sofa", description: "Sofa", type: EventTypeEnum.Purchase, value: 1500, },
  { id: 61, name: "Fotel", description: "Fotel", type: EventTypeEnum.Purchase, value: 500, },
  { id: 62, name: "Nowe okna", description: "Dofinansowanie ze spoldzielni na nowe okna, ale troche swoich trza wylozyc", type: EventTypeEnum.Purchase, value: 5000, },
  { id: 63, name: "Dywan", description: "Dywan", type: EventTypeEnum.Purchase, value: 200, },
  { id: 64, name: "Gra1", description: "Gra1", type: EventTypeEnum.Purchase, value: 50, },
  { id: 65, name: "Gra2", description: "Gra2", type: EventTypeEnum.Purchase, value: 100, },
  { id: 66, name: "Gra3", description: "Gra3", type: EventTypeEnum.Purchase, value: 150, },

  //small deals
  { id: 67, name: "Szkolenie1", description: "Szkolenie1", type: EventTypeEnum.SmallDeal, value: 100, isRejectable: true, },
  { id: 68, name: "Szkolenie2", description: "Szkolenie2", type: EventTypeEnum.SmallDeal, value: 500, isRejectable: true, },
  { id: 69, name: "Szkolenie3", description: "Szkolenie3", type: EventTypeEnum.SmallDeal, value: 1000, isRejectable: true, },
  { id: 70, name: "Kolekcja monet", description: "Kolekcja monet", type: EventTypeEnum.SmallDeal, value: 5000, isRejectable: true, },
  { id: 71, name: "Obraz1", description: "Obraz1", type: EventTypeEnum.SmallDeal, value: 1000, isRejectable: true, },
  { id: 72, name: "Obraz2", description: "Obraz2", type: EventTypeEnum.SmallDeal, value: 2000, isRejectable: true, },
  { id: 73, name: "Obraz3", description: "Obraz3", type: EventTypeEnum.SmallDeal, value: 5000, isRejectable: true, },

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
];

