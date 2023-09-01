type OptionRatings = {
    financialCost: number;
    levelOfEffort: number;
    timeInvestment: number;
    risk: number;
    shortTermReturn: number;
    longTermReturn: number;
};

export type Option = {
    _id: string;
    title: string;
    ratings: OptionRatings;
};
