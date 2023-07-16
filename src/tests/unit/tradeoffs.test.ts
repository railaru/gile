import { describe, expect, it } from "@jest/globals";
import { sortOptionsByLongTermReturnAndRisk } from "../../lib/tradeoffs";
import { mockOptions } from "../../mock/options";

describe("sortOptionsByLongTermReturnAndRisk", () => {
  it("should sort options by highest longTermReturn and lowest risk", () => {
    const sortedOptions = sortOptionsByLongTermReturnAndRisk(mockOptions);

    expect(sortedOptions[0].ratings.longTermReturn).toBe(4); // Shopify Store has the highest longTermReturn (4)
    expect(sortedOptions[0].ratings.risk).toBe(1); // Shopify Store has the lowest risk (1)

    expect(sortedOptions[1].ratings.longTermReturn).toBe(3); // Web dev agency has the second highest longTermReturn (3)
    expect(sortedOptions[1].ratings.risk).toBe(5); // Web dev agency has the second lowest risk (5)

    expect(sortedOptions[2].ratings.longTermReturn).toBe(1); // Lemonade Stand has the lowest longTermReturn (1)
    expect(sortedOptions[2].ratings.risk).toBe(2); // Lemonade Stand has the highest risk (2)
  });
});
