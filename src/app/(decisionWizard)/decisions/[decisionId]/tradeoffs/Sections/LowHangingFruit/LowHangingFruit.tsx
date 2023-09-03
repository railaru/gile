'use client';

import Pane from '@/components/ui/Pane/Pane';
import React from 'react';
import { sortOptionsByLowestHangingFruit } from '@/lib/tradeoffs';
import { Option } from '@/types/options';
import { Progress } from '@/components/ui/Progress/Progress';
import { useOptions } from '@/hooks/queries/useOptions';

function formatOptionsForChart(options: Option[]) {
    return options.map((option) => ({
        title: option.title,
        Returns: option.ratings.longTermReturn,
        Risk: option.ratings.risk,
    }));
}

export default function LowHangingFruit() {
    const { data } = useOptions();

    const sortedOptions = sortOptionsByLowestHangingFruit(data || []);

    return (
        <Pane id="low-hanging-fruit" className="mt-16">
            <div className="justify-between lg:flex lg:items-start">
                <div>
                    <h1 className="text-2xl font-[300]">
                        <span className="relative bottom-[3px] lg:hidden mr-2">
                            🍍
                        </span>

                        <span>
                            Low hanging fruit
                        </span>
                    </h1>

                    <h2 className="text-xl font-[300] text-neutral-2 max-w-[360px] mt-[32px]">
                        Your options sorted by Low effort, Low time commitment and High
                        short term return.
                    </h2>
                </div>

                <div className="hidden lg:block">
                    <h3 className="text-[130px] relative lg:top-[-28px] lg:mb-[-45px]">
                        🍍
                    </h3>
                </div>
            </div>

            {data && data?.length > 0 && (
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
                                <h3>Effort: {option.ratings.levelOfEffort} of 5</h3>

                                <Progress
                                    value={(option.ratings.risk / 5) * 100}
                                    className="h-[4px] mt-2"
                                />

                                <h3 className="mt-4">
                                    Time investment: {option.ratings.timeInvestment} of 5
                                </h3>

                                <Progress
                                    value={(option.ratings.timeInvestment / 5) * 100}
                                    className="h-[4px] mt-2"
                                />

                                <h3 className="mt-4">
                                    Short term return: {option.ratings.shortTermReturn} of 5
                                </h3>

                                <Progress
                                    value={(option.ratings.shortTermReturn / 5) * 100}
                                    className="h-[4px] mt-2"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </Pane>
    );
}
