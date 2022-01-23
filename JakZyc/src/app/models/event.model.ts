import { IIncome } from './income.model';
import { EventType } from './event-type.enum';

export interface IEvent {
  name: string;
  description?: string; //make it nonnullable
  type?: EventType
  value: number;
  rejectable?: boolean;
  percentable?: boolean;
}


export class Event implements IEvent {
  name = '';
  value = 0;
}

export const EVENTS: IEvent[] = [
  { name: 'dzialkaRODOS', type: EventType.BigDeal, value: 10000, },
  { name: 'kawalerka', type: EventType.BigDeal, value: 150000, },
  { name: 'mieszkanie2pok', type: EventType.BigDeal, value: 225000, },
  { name: 'mieszkanie4pok', type: EventType.BigDeal, value: 300000, },
  { name: 'dzialka grunt', type: EventType.BigDeal, value: 100000, },
  { name: 'domek letni', type: EventType.BigDeal, value: 50000, },
  { name: 'maly dom', type: EventType.BigDeal, value: 300000, },
  { name: 'sredni dom', type: EventType.BigDeal, value: 500000, },
  { name: 'duzy dom', type: EventType.BigDeal, value: 1000000, },
  { name: 'auto1', type: EventType.BigDeal, value: 5000, },
  { name: 'auto2', type: EventType.BigDeal, value: 15000, },
  { name: 'auto3', type: EventType.BigDeal, value: 30000, },
  { name: 'garaz duzy', type: EventType.BigDeal, value: 10000, },
  { name: 'garaz maly', type: EventType.BigDeal, value: 25000, },
  { name: 'pozyczka duza1', type: EventType.BigDeal, value: 10000, },
  { name: 'pozyczka duza2', type: EventType.BigDeal, value: 20000, },
  { name: 'pozyczka duza3', type: EventType.BigDeal, value: 50000, },

  //na plus
  { name: 'wlasne urodziny', type: EventType.Event, value: 500, },
  { name: 'szkolenie1podwyzka', type: EventType.Event, value: 10, },//%
  { name: 'szkolenie2podwyzka', type: EventType.Event, value: 20, },//%
  { name: 'szkolenie2podwyzka', type: EventType.Event, value: 30, },//%
  { name: 'zmiana pracy na lepsza1', type: EventType.Event, value: 10, },//%
  { name: 'zmiana pracy na lepsza2', type: EventType.Event, value: 20, },//%
  { name: 'zmiana pracy na lepsza3', type: EventType.Event, value: 30, },//%
  { name: 'wyprzedaz z domu cos1', type: EventType.Event, value: 100, },
  { name: 'wyprzedaz z domu cos2', type: EventType.Event, value: 200, },
  { name: 'wyprzedaz z domu cos3', type: EventType.Event, value: 500, },
  { name: 'fucha1', type: EventType.Event, value: 100, },
  { name: 'fucha2', type: EventType.Event, value: 500, },
  { name: 'fucha3', type: EventType.Event, value: 1000, },

  // na minus
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
  { name: 'zmiana pracy na gorsza1', type: EventType.Event, value: -10, },//%
  { name: 'zmiana pracy na gorsza2', type: EventType.Event, value: -20, },//%
  { name: 'zmiana pracy na gorsza3', type: EventType.Event, value: -30, },//%
  { name: 'mandat1', type: EventType.Event, value: -100, },
  { name: 'mandat2', type: EventType.Event, value: -200, },
  { name: 'mandat3', type: EventType.Event, value: -500, },
  { name: 'naprawa kran', type: EventType.Event, value: -150, },
  { name: 'choroba1', type: EventType.Event, value: -200, },
  { name: 'choroba2', type: EventType.Event, value: -500, },
  { name: 'strata pracy 1tura', type: EventType.Event, value: -100, },//%


  { name: 'toster', type: EventType.Purchase, value: -100, },
  { name: 'tv', type: EventType.Purchase, value: -1000, },
  { name: 'big TV', description: 'TV 120" musiales go miec', type: EventType.Purchase, value: -3000, },
  { name: 'lapek', type: EventType.Purchase, value: -2000, },
  { name: 'superlapek', type: EventType.Purchase, value: -6000, },
  { name: 'smartfon', type: EventType.Purchase, value: -500, },
  { name: 'supersmartfon', type: EventType.Purchase, value: -1500, },
  { name: 'auto', type: EventType.Purchase, value: -5000, },
  { name: 'superauto', type: EventType.Purchase, value: -15000, },
  { name: 'naprawa auta1', type: EventType.Purchase, value: -200, },
  { name: 'naprawa auta3', type: EventType.Purchase, value: -500, },
  { name: 'naprawa auta3', type: EventType.Purchase, value: -1000, },
  { name: 'rolki', type: EventType.Purchase, value: -200, },
  { name: 'meble', type: EventType.Purchase, value: -5000, },
  { name: 'sofa', type: EventType.Purchase, value: -1500, },
  { name: 'fotel', type: EventType.Purchase, value: -500, },
  { name: 'wymiana okien', type: EventType.Purchase, value: -5000, },
  { name: 'dywan', type: EventType.Purchase, value: -200, },
  { name: 'gra1', type: EventType.Purchase, value: -50, },
  { name: 'gra2', type: EventType.Purchase, value: -100, },
  { name: 'gra3', type: EventType.Purchase, value: -150, },

  { name: 'szkolenie1', type: EventType.SmallDeal, value: 100, },
  { name: 'szkolenie2', type: EventType.SmallDeal, value: 500, },
  { name: 'szkolenie3', type: EventType.SmallDeal, value: 1000, },
  { name: 'kolekcja monet', type: EventType.SmallDeal, value: 5000, },
  { name: 'obraz1', type: EventType.SmallDeal, value: 1000, },
  { name: 'obraz2', type: EventType.SmallDeal, value: 2000, },
  { name: 'obraz3', type: EventType.SmallDeal, value: 5000, },
  { name: 'pozyczka1', type: EventType.SmallDeal, value: 100, },
  { name: 'pozyczka2', type: EventType.SmallDeal, value: 500, },
  { name: 'pozyczka3', type: EventType.SmallDeal, value: 1000, },
]
