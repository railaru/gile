'use client';

import React, { useEffect, useState } from 'react';
import { SheetContent, SheetHeader, SheetTitle, } from '@/components/ui/Sheet/Sheet';
import { useParams } from 'next/navigation';
import { Id } from '../../../../../../../convex/_generated/dataModel';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../../../../../convex/_generated/api';
import { API_ROUTES } from '@/constants/routes';
import Button from '@/components/ui/Button/Button';
import { useToast } from '@/components/ui/Toaster/useToast';

type Params = {
    decision?: string;
    userInterests?: string[];
    userDescription?: string;
}

type Data = {
    message: {
        content: string;
    }
}

type Response = Data[];

function useData({ decision, userInterests, userDescription }: Params) {
    const formattedUserInterests = userInterests?.join(',');
    const url = `${API_ROUTES.AI_OPTION_SUGGEST}?decision=${decision}&userInterests=${formattedUserInterests}&userDescription=${userDescription}`;
    const [data, setData] = useState<Response | null>(null);

    useEffect(() => {
        if ( !decision || !userInterests || !userDescription) return;

        fetch(url)
        .then(response => response.json())
        .then(data => setData(data as Response));
    }, [decision, userInterests, userDescription]);

    const isLoading = !data;
    const content = data?.[0]?.message?.content || '';
    const formattedData = content.split(',');

    return {
        isLoading,
        data,
        formattedData,
    };
}

export default function Content() {
    const params = useParams();
    const decisionId = params?.decisionId as Id<'decisions'>;
    const storedDecisionRecord = useQuery(api.decisions.getById, { _id: decisionId });
    const userData = useQuery(api.users.get);
    const addOption = useMutation(api.options.add);
    const { toast } = useToast();

    const { formattedData, isLoading } = useData({
        decision: storedDecisionRecord?.decision,
        userInterests: userData?.interests,
        userDescription: userData?.description,
    });

    const handleAdd = (title: string) => {
        addOption({
            decisionId,
            title,
            ratings: {
                financialCost: 0,
                levelOfEffort: 0,
                timeInvestment: 0,
                risk: 0,
                shortTermReturn: 0,
                longTermReturn: 0,
            }
        }).catch(() => {
            toast({
                title: 'Error',
                description: 'Could not add option. Try coping it manually.',
                variant: 'destructive',
            });
        }).then(() => {
            toast({
                title: 'Success',
                description: 'Option added successfully.',
            });
        });
    };

    return (
        <SheetContent className="w-full sm:min-w-[540px] lg:min-w-[680px]">
            <SheetHeader className="mt-10">
                <SheetTitle>AI Suggestions</SheetTitle>
            </SheetHeader>

            <p className="text-neutral-2 mt-2">
                AI Suggestions are generated based on the data you have provided.
            </p>

            <div className="mt-10">
                {isLoading && (
                    <p>Loading...</p>
                )}

                { !isLoading && formattedData && formattedData.length > 0 && (
                    <ul className="flex flex-col gap-4">
                        {formattedData.map((item, index) => (
                            <li
                                key={index}
                                className="bg-neutral-7/50 rounded-[4px] px-4 py-[21.5px] flex justify-between items-center gap-4"
                            >
                                <p>{item}</p>

                                <Button
                                    variant="ghost"
                                    type="button"
                                    onClick={() => handleAdd(item)}
                                >
                                    Add
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </SheetContent>
    );
}
