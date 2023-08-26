import React from 'react';
import { SheetContent, SheetHeader, SheetTitle, } from '@/components/ui/Sheet/Sheet';
import Button from '@/components/ui/Button/Button';
import useDecisionStore from '@/app/(decisionWizard)/store/decision';
import { mockData } from '@/app/(decisionWizard)/decisions/make/Examples/mockData';
import useStore from '@/app/(decisionWizard)/decisions/make/Examples/store';

export default function Content() {
    const { setDecision } = useDecisionStore();
    const { setIsExamplesModalOpened } = useStore();

    const handleApply = (decision: string) => {
        setDecision(decision);
        setIsExamplesModalOpened(false);
    };

    return (
        <SheetContent className="w-full sm:min-w-[540px] lg:min-w-[680px]">
            <SheetHeader className="mt-10">
                <SheetTitle>Examples</SheetTitle>

                <ul>
                    {mockData.map((item, index) => (
                        <li key={index} className="mt-20 bg-neutral-7/50">
                            <div className="p-4 lg:p-8 mt-4 lg:mt-8">
                                <h4 className="text-[50px] -mt-[50px] lg:text-[70px] lg:-mt-[80px]" aria-label="Emoji">
                                    {item.emoji}
                                </h4>

                                <div className="space-y-5">
                                    <h3 className="text-2xl font-[300]">{item.category}</h3>

                                    <h4 className="text-xl font-[200] text-neutral-2">
                                        {item.title}
                                    </h4>

                                    <Button
                                        onClick={() => handleApply(item.title)}
                                    >
                                        Apply
                                    </Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </SheetHeader>
        </SheetContent>
    );
}
