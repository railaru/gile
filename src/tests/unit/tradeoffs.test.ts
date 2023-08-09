import { describe, expect, it } from "@jest/globals";
import { sortOptionsByRiskWeightedReturn } from "../../lib/tradeoffs";
import { mockOptions } from "../../mock/options";

describe("sortOptionsByLongTermReturnAndRisk", () => {
  it("should sort options by highest longTermReturn and lowest risk", () => {
    const sortedOptions = sortOptionsByRiskWeightedReturn(mockOptions);

    expect(sortedOptions[0].ratings.longTermReturn).toBe(3); // Shopify Store
    expect(sortedOptions[0].ratings.risk).toBe(1);

    expect(sortedOptions[1].ratings.longTermReturn).toBe(3); // Physical Product
    expect(sortedOptions[1].ratings.risk).toBe(2);

    expect(sortedOptions[2].ratings.longTermReturn).toBe(1); // Lemonade Stand
    expect(sortedOptions[2].ratings.risk).toBe(1);
  });
});
