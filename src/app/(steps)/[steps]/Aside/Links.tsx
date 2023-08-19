'use client';

import React, { HTMLAttributes } from 'react';
import { PAGE_ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Divider from '@/components/ui/Divider/Divider';

const links = [
    {
        name: 'What decision do you have to make?',
        url: PAGE_ROUTES.STEPS[1],
    },
    {
        name: 'What options do you have?',
        url: PAGE_ROUTES.STEPS[2],
    },
    {
        name: 'Evaluate your options',
        url: PAGE_ROUTES.STEPS[3],
    },
];

const tradeoffsLinks = [
    {
        name: 'Risk weighted return',
        url: PAGE_ROUTES.STEPS.TRADEOFFS.HASH_SECTIONS.RISK_WEIGHTED_RETURN,
        emoji: '🐢',
    },
    {
        name: 'High reward & High risk',
        url: PAGE_ROUTES.STEPS.TRADEOFFS.HASH_SECTIONS.HIGH_REWARD_HIGH_RISK,
        emoji: '🎸',
    },
    {
        name: 'Low hanging fruit',
        url: PAGE_ROUTES.STEPS.TRADEOFFS.HASH_SECTIONS.LOW_HANGING_FRUIT,
        emoji: '🍍',
    },
];

type Props = HTMLAttributes<HTMLElement>;
export default function Links(props: Props) {
    const pathName = usePathname();

    return (
        <div {...props}>
            <div className="space-y-4 flex-col flex">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={cn('text-sm font-[300] focus:bg-neutral-7 hover:bg-neutral-7 transition-colors p-2 -m-2 rounded-[4px]', {
                            'text-primary bg-neutral-7': pathName === link.url,
                        })}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <Divider className="my-4"/>

            <div className="space-y-4 flex-col flex">
                <Link
                    href={PAGE_ROUTES.STEPS.TRADEOFFS.INDEX}
                    className={cn('text-sm font-[300] focus:bg-neutral-7 hover:bg-neutral-7 transition-colors p-2 -m-2 rounded-[4px]', {
                        'text-primary bg-neutral-7': pathName === PAGE_ROUTES.STEPS.TRADEOFFS.INDEX,
                    })}
                >
                    Tradeoffs
                </Link>

                {tradeoffsLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={cn('text-sm font-[300] focus:bg-neutral-7 hover:bg-neutral-7 transition-colors p-2 -m-2 rounded-[4px]', {
                            'text-primary bg-neutral-7': pathName === link.url,
                        })}
                    >
                        <span className="mr-1">{link.emoji}</span> <span>{link.name}</span>
                    </Link>

                ))}
            </div>
        </div>
    );
}
