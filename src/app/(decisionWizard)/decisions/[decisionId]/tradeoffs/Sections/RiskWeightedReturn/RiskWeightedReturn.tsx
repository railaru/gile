'use client';

import Pane from '@/components/ui/Pane/Pane';
import React from 'react';
import useOptionsStore from '@/app/(decisionWizard)/store/options';
import { sortOptionsByRiskWeightedReturn } from '@/lib/tradeoffs';
import { Option } from '@/types/options';
import { Progress } from '@/components/ui/Progress/Progress';
import { ScatterChart } from '@tremor/react';

function formatOptionsForChart(options: Option[]) {
    return options.map((option) => ({
        title: option.title,
        Returns: option.ratings.longTermReturn,
        Risk: option.ratings.risk,
    }));
}

export default function RiskWeightedReturn() {
    const { options } = useOptionsStore();

    const sortedOptions = sortOptionsByRiskWeightedReturn(options);

    return (
        <Pane id="risk-weighted-return" className="mt-12 lg:mt-16">
            <div className="justify-between lg:flex lg:items-start">
                <div>
                    <h1 className="text-2xl font-[300]">
                        <span className="relative bottom-[3px] lg:hidden mr-2">
                        🐢
                        </span>

                        <span>
                        Risk weighted return
                        </span>
                    </h1>

                    <h2 className="text-xl font-[300] text-neutral-2 max-w-[360px] mt-[32px]">
                        Your options sorted by highest long term return with lowest risk.
                    </h2>
                </div>

                <div className="hidden lg:block">
                    <h3 className="text-[130px] relative lg:top-[-28px] lg:mb-[-45px]">
                        🐢
                    </h3>
                </div>
            </div>

            {options.length > 0 && (
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

            <div className="relative mt-6 bg-white rounded-[4px] p-6 pb-10">
                <h3 className="text-sm text-neutral-2">Risk</h3>

                <ScatterChart
                    className="mt-4"
                    yAxisWidth={50}
                    data={formatOptionsForChart(sortedOptions)}
                    category="title"
                    x="Returns"
                    y="Risk"
                    showOpacity={true}
                    showLegend={false}
                />

                <h3 className="absolute text-sm right-7 text-neutral-2">Reward</h3>
            </div>
        </Pane>
    );
}
