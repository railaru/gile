import { Option } from "../types/options";

export const mockOptions: Option[] = [
  {
    id: "1",
    title: "Lemonade Stand",
    ratings: {
      financialCost: 2,
      levelOfEffort: 4,
      timeInvestment: 4,
      risk: 2,
      shortTermReturn: 1,
      longTermReturn: 1,
    },
  },
  {
    id: "2",
    title: "Shopify Store",
    ratings: {
      financialCost: 4,
      levelOfEffort: 4,
      timeInvestment: 4,
      risk: 1,
      shortTermReturn: 2,
      longTermReturn: 4,
    },
  },
  {
    id: "3",
    title: "Web dev agency",
    ratings: {
      financialCost: 5,
      levelOfEffort: 5,
      timeInvestment: 5,
      risk: 5,
      shortTermReturn: 1,
      longTermReturn: 3,
    },
  },
];
