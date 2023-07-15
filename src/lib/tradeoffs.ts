import { Option } from "./../types/options";

export function sortOptionsByLongTermReturnAndRisk(
  options: Option[]
): Option[] {
  return options.sort((a, b) => {
    // Sort by descending longTermReturn
    if (a.ratings.longTermReturn > b.ratings.longTermReturn) {
      return -1;
    }
    if (a.ratings.longTermReturn < b.ratings.longTermReturn) {
      return 1;
    }

    // Sort by ascending risk if longTermReturn is the same
    if (a.ratings.risk < b.ratings.risk) {
      return -1;
    }
    if (a.ratings.risk > b.ratings.risk) {
      return 1;
    }

    return 0;
  });
}
