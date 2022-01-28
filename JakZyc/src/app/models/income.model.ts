import { IncomeTypeEnum } from "./constants/income-type.enum";

export interface IIncome {
  name: string;
  value: number;
  type?: IncomeTypeEnum;
  duration?: number;
  isNew?: boolean
  relatedEventId?: number
}

