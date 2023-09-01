import { describe, expect, it } from '@jest/globals';
import {
  sortOptionsByHighestReturn,
  sortOptionsByLowestHangingFruit,
  sortOptionsByRiskWeightedReturn,
} from '../../lib/tradeoffs';
import { mockOptions } from '../../mock/options';

describe('sortOptionsByLongTermReturnAndRisk', () => {
    it('should sort options by highest longTermReturn and lowest risk', () => {
        const sortedOptions = sortOptionsByRiskWeightedReturn(mockOptions);

        expect(sortedOptions[0].title).toBe('Shopify Store');
        expect(sortedOptions[0].ratings.longTermReturn).toBe(3);
        expect(sortedOptions[0].ratings.risk).toBe(1);

        expect(sortedOptions[1].title).toBe('Physical product');
        expect(sortedOptions[1].ratings.longTermReturn).toBe(3);
        expect(sortedOptions[1].ratings.risk).toBe(2);

        expect(sortedOptions[2].title).toBe('Lemonade Stand');
        expect(sortedOptions[2].ratings.longTermReturn).toBe(1);
        expect(sortedOptions[2].ratings.risk).toBe(1);
    });
});

describe('sortOptionsByHighestReturn', () => {
    it('should sort options by highest longTermReturn ignoring risk', () => {
        const sortedOptions = sortOptionsByHighestReturn(mockOptions);

        expect(sortedOptions[0].title).toBe('SaaS');
        expect(sortedOptions[0].ratings.longTermReturn).toBe(5);
        expect(sortedOptions[0].ratings.risk).toBe(5);

        expect(sortedOptions[5].title).toBe('Lemonade Stand');
        expect(sortedOptions[5].ratings.longTermReturn).toBe(1);
        expect(sortedOptions[5].ratings.risk).toBe(1);
    });
});

describe('sortOptionsByLowestHangingFruit', () => {
    it('should sort options based on the three-step process: low time commitment, low time investment, and high short-term return', () => {
        const sortedOptions = sortOptionsByLowestHangingFruit(mockOptions);

        // Expected sorted option IDs
        const expectedIds = ['2', '1', '6', '4', '5', '3'];

        const sortedOptionIds = sortedOptions.map((option) => option._id);
        expect(sortedOptionIds).toEqual(expectedIds);
    });
});
