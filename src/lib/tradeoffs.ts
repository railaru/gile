import { Option } from "./../types/options";

export function sortOptionsByLongTermReturnAndRisk(options: Option[]) {
  return options.sort((firstOption, secondOption) => {
    // Sort by descending longTermReturn
    if (
      firstOption.ratings.longTermReturn > secondOption.ratings.longTermReturn
    ) {
      return -1;
    }
    if (
      firstOption.ratings.longTermReturn < secondOption.ratings.longTermReturn
    ) {
      return 1;
    }

    // Sort by ascending risk if longTermReturn is the same
    if (firstOption.ratings.risk < secondOption.ratings.risk) {
      return -1;
    }
    if (firstOption.ratings.risk > secondOption.ratings.risk) {
      return 1;
    }

    return 0;
  });
}

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
