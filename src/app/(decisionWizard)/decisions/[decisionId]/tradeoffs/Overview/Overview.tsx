import React from 'react';
import Cta from '../Cta/Cta';
import { PAGE_ROUTES } from '@/constants/routes';
import RiskWeightedReturn from '../Sections/RiskWeightedReturn/RiskWeightedReturn';
import HighRewardHighRisk from '../Sections/HighRewardHighRisk/HighRewardHighRisk';
import LowHangingFruit from '../Sections/LowHangingFruit/LowHangingFruit';

const mockData = [
    {
        emoji: '🐢',
        title: 'Risk weighted return',
        description: 'Slow and steady wins the race. Find tradeoffs that that optimise for long term wins.',
        link: {
            title: 'Discover',
            url: PAGE_ROUTES.DECISIONS.TRADEOFFS.RISK_WEIGHTED_RETURN('123'), // todo: replace with real decision id
        }
    },
    {
        emoji: '🎸',
        title: 'High reward & High risk',
        description: 'Find opportunities optimised for the biggest reward while ignoring the risk.',
        link: {
            title: 'Discover',
            url: PAGE_ROUTES.DECISIONS.TRADEOFFS.HIGH_REWARD_HIGH_RISK('123'), // todo: replace with real decision id
        }
    },
    {
        emoji: '🍍',
        title: 'Low hanging fruit',
        description: 'Find opportunities with low effort and quick wins.',
        link: {
            title: 'Discover',
            url: PAGE_ROUTES.DECISIONS.TRADEOFFS.LOW_HANGING_FRUIT('123'), // todo: replace with real decision id
        }
    }
];

export default function Overview() {
    return (
        <div>
            <div
                className="flex overflow-auto lg:overflow-visible flex-row flex-nowrap lg:grid gap-8 mt-12 lg:mt-20 lg:gap-y-16 lg:grid-cols-2">
                {
                    mockData.map((item, index) => (
                        <div className="min-w-[300px] lg:min-w-full" key={index}>
                            <Cta
                                emoji={item.emoji}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                            />
                        </div>
                    ))
                }
            </div>

            <RiskWeightedReturn/>

            <HighRewardHighRisk/>

            <LowHangingFruit/>
        </div>
    );
}
