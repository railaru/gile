'use client';

import React, { useEffect, useState } from 'react';
import { AreaChart } from '@tremor/react';

type DataItem = {
    title: string;
    'Long Term Return': number;
}

const data = [
    {
        'title': 'SaaS',
        'Long Term Return': 5
    },
    {
        'title': 'Shopify Store',
        'Long Term Return': 3
    },
    {
        'title': 'Physical product',
        'Long Term Return': 3
    },
    {
        'title': 'Digital product',
        'Long Term Return': 3
    },
    {
        'title': 'Lemonade Stand',
        'Long Term Return': 1
    }
];

function randomiseData(data: DataItem[]) {
    return data.map((item) => ({
        ...item,
        'Long Term Return': Math.floor(Math.random() * 5) + 1
    }));
}

function useRandomiseData(data: DataItem[]) {
    const [randomisedData, setRandomisedData] = useState<DataItem[]>(data);

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomisedData(randomiseData(data));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return randomisedData;
}

export default function Chart() {
    const randomisedData = useRandomiseData(data);

    return (
        <div>
            <div className="lg:w-[660px] bg-neutral-7/50 px-3 py-6 rounded-[4px]">
                <AreaChart
                    data={randomisedData}
                    index="title"
                    categories={['Long Term Return']}
                    colors={['emerald', 'gray']}
                    yAxisWidth={40}
                    className="bg-white"
                />
            </div>
        </div>
    );
}