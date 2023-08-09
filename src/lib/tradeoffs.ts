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
