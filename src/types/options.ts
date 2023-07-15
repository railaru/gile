type OptionRatings = {
  financialCost: number;
  levelOfEffort: number;
  timeInvestment: number;
  risk: number;
  shortTermReturn: number;
  longTermReturn: number;
};

export type Option = {
  id: string;
  title: string;
  ratings: OptionRatings;
};
