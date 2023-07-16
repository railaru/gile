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
