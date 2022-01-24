export interface IJob {
  id: number;
  name: string;
  salary: number;
}

export class Job implements IJob{
  id: number;
  name: string;
  salary: number;
}


export const JOBS_LIST: IJob[] = [
  { id: 1, name: 'Dozorca', salary: 2000 },
  { id: 2, name: 'Architekt', salary: 6000 },
  { id: 3, name: 'Nauczyciel', salary: 4000 },
  { id: 4, name: 'Kasjer', salary: 2500 },
  { id: 5, name: 'Dyrektor', salary: 10000 },
  { id: 6, name: 'Kierowca', salary: 5000 },
  { id: 7, name: 'Magazynier', salary: 5000 },
  { id: 8, name: 'Sprzedawca', salary: 6000 },
  { id: 9, name: 'Inżynier', salary: 7000 },
  { id: 10, name: 'Lekarz', salary: 7000 },
]
