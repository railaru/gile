import React from 'react';
import { SheetContent, SheetHeader, SheetTitle, } from '@/components/ui/Sheet/Sheet';
import Button from '@/components/ui/Button/Button';

type MockDataItem = {
    emoji: string;
    category: string;
    title: string;
};

const mockData: MockDataItem[] = [
    {
        emoji: '🚀',
        category: 'Career',
        title: '“What next steps should I take in my career?”',
    },
    {
        emoji: '📈',
        category: 'Business',
        title: '“Should I hire a project manager?””',
    },
    {
        emoji: '🎓',
        category: 'Education',
        title: '“Is pursuing a master\'s degree worth it for my field?”',
    },
    {
        emoji: '💡',
        category: 'Innovation',
        title: '“How can we encourage more creative thinking in our team?”',
    },
    {
        emoji: '⏰',
        category: 'Time Management',
        title: '“What are some effective techniques for managing my time better?”',
    },
    {
        emoji: '💰',
        category: 'Finance',
        title: '“How can I start investing with a limited budget?”',
    },
    {
        emoji: '🌱',
        category: 'Personal Growth',
        title: '“What habits can I develop to improve my overall well-being?”',
    },
];

export default function Content() {


    return (
        <SheetContent className="w-full sm:min-w-[540px] lg:min-w-[680px]">
            <SheetHeader className="mt-10">
                <SheetTitle>Examples</SheetTitle>

                <ul>
                    {mockData.map((item, index) => (
                        <li key={index} className="mt-20 bg-neutral-7/50">
                            <div className="p-8 mt-8">
                                <h4 className="text-[70px] -mt-[80px]" aria-label="Emoji">
                                    {item.emoji}
                                </h4>

                                <div className="space-y-5">
                                    <h3 className="text-2xl font-[300]">{item.category}</h3>

                                    <h4 className="text-xl font-[200] text-neutral-2">
                                        {item.title}
                                    </h4>

                                    <Button>Apply</Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </SheetHeader>
        </SheetContent>
    );
}
