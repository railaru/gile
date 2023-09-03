'use client';

import Pane from '@/components/ui/Pane/Pane';
import React from 'react';
import { sortOptionsByHighestReturn } from '@/lib/tradeoffs';
import { LineChart } from '@tremor/react';
import { Progress } from '@/components/ui/Progress/Progress';
import { Option } from '@/types/options';
import { useOptions } from '@/hooks/queries/useOptions';

function formatOptionsForChart(options: Option[]) {
    return options.map((option) => ({
        title: option.title,
        'Long Term Return': option.ratings.longTermReturn,
    }));
}

export default function HighRewardHighRisk() {
    const { data } = useOptions();

    const sortedOptions = sortOptionsByHighestReturn(data || []);

    return (
        <Pane id="high-reward-high-risk" className="mt-16">
            <div className="justify-between lg:flex lg:items-start">
                <div>
                    <h1 className="text-2xl font-[300]">
                        <span className="relative bottom-[3px] lg:hidden mr-2">
                            🎸
                        </span>

                        <span>
                            High reward & High risk
                        </span>
                    </h1>

                    <h2 className="text-xl font-[300] text-neutral-2 max-w-[360px] mt-[32px]">
                        Your options sorted by highest long term return ignoring risk.
                    </h2>
                </div>

                <div className="hidden lg:block">
                    <h3 className="text-[130px] relative lg:top-[-28px] lg:mb-[-45px]">
                        🎸
                    </h3>
                </div>
            </div>

            {data && data.length > 0 && (
                <ul className="mt-16 space-y-4">
                    {sortedOptions.map((option, index) => (
                        <li
                            key={index}
                            className="rounded-[4px] px-4 py-[21.5px] bg-white lg:flex lg:items-start lg:justify-between"
                        >
                            <h3>
                                #{index + 1} {option.title}
                            </h3>

                            <div className="lg:max-w-[200px] mt-4 lg:mt-0 text-sm text-neutral-2">
                                <h3>Risk: {option.ratings.risk} of 5</h3>

                                <Progress
                                    value={(option.ratings.risk / 5) * 100}
                                    className="h-[4px] mt-2"
                                />

                                <h3 className="mt-4">
                                    Long term return: {option.ratings.longTermReturn} of 5
                                </h3>

                                <Progress
                                    value={(option.ratings.longTermReturn / 5) * 100}
                                    className="h-[4px] mt-2"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <LineChart
                className="p-2 lg:p-6 mt-6 bg-white rounded-[4px]"
                data={formatOptionsForChart(sortedOptions)}
                index="title"
                categories={['Long Term Return']}
                colors={['emerald', 'gray']}
                yAxisWidth={40}
            />
        </Pane>
    );
}
