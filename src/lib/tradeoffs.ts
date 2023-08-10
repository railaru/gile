import { Option } from "./../types/options";

export function sortOptionsByRiskWeightedReturn(options: Option[]) {
  return options.sort((firstOption, secondOption) => {
    // Calculate risk-weighted return for each option
    const firstOptionRiskWeightedReturn =
      calculateRiskWeightedReturn(firstOption);
    const secondOptionRiskWeightedReturn =
      calculateRiskWeightedReturn(secondOption);

    // Sort by descending risk-weighted return
    return secondOptionRiskWeightedReturn - firstOptionRiskWeightedReturn;
  });
}

function calculateRiskWeightedReturn(option: Option) {
  // Calculate risk-adjusted return by considering only the "risk" factor
  const riskFactor = option.ratings.risk;
  const excessReturn = option.ratings.longTermReturn;
  const riskWeightedReturn = excessReturn - riskFactor;

  return riskWeightedReturn;
}

export function sortOptionsByHighestReturn(options: Option[]) {
  return options.sort((firstOption, secondOption) => {
    return (
      secondOption.ratings.longTermReturn - firstOption.ratings.longTermReturn
    );
  });
}

export function sortOptionsByLowestHangingFruit(options: Option[]) {
  // sorted by Low effort, Low time commitment and High short term return.
  return options.sort((a, b) => {
    // Step 1: Sort by low time commitment
    if (a.ratings.timeInvestment !== b.ratings.timeInvestment) {
      return a.ratings.timeInvestment - b.ratings.timeInvestment;
    }

    // Step 2: Within the same time commitment, sort by low time investment
    if (a.ratings.levelOfEffort !== b.ratings.levelOfEffort) {
      return a.ratings.levelOfEffort - b.ratings.levelOfEffort;
    }

    // Step 3: Within the same time commitment and time investment, sort by high short-term return
    return b.ratings.shortTermReturn - a.ratings.shortTermReturn;
  });
}
