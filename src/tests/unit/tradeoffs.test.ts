import { describe, expect, it } from "@jest/globals";
import { sortOptionsByLongTermReturnAndRisk } from "../../lib/tradeoffs";
import { Option } from "../../types/options";

const mockData: Option[] = [
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

describe("sortOptionsByLongTermReturnAndRisk", () => {
  it("should sort options by highest longTermReturn and lowest risk", () => {
    const sortedOptions = sortOptionsByLongTermReturnAndRisk(mockData);
    expect(sortedOptions[0].ratings.longTermReturn).toBe(4); // Shopify Store has the highest longTermReturn (4)
    expect(sortedOptions[0].ratings.risk).toBe(1); // Shopify Store has the lowest risk (1)

    expect(sortedOptions[1].ratings.longTermReturn).toBe(3); // Web dev agency has the second highest longTermReturn (3)
    expect(sortedOptions[1].ratings.risk).toBe(5); // Web dev agency has the second lowest risk (5)

    expect(sortedOptions[2].ratings.longTermReturn).toBe(1); // Lemonade Stand has the lowest longTermReturn (1)
    expect(sortedOptions[2].ratings.risk).toBe(2); // Lemonade Stand has the highest risk (2)
  });
});
