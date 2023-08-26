'use client';

import React, { HTMLAttributes, ReactNode } from 'react';
import { PAGE_ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Divider from '@/components/ui/Divider/Divider';
import useDecisionStore from '@/app/(decisionWizard)/store/decision';
import useOptionsStore from '@/app/(decisionWizard)/store/options';

const links = [
    {
        name: 'Evaluate your options',
        url: PAGE_ROUTES.DECISIONS.EVALUATE_OPTIONS('123'), // todo: replace with decision id from db
    },
];

const tradeoffsLinks = [
    {
        name: 'Risk weighted return',
        url: PAGE_ROUTES.DECISIONS.TRADEOFFS.RISK_WEIGHTED_RETURN('123'), // todo: replace with decision id from db
        emoji: '🐢',
    },
    {
        name: 'High reward & High risk',
        url: PAGE_ROUTES.DECISIONS.TRADEOFFS.HIGH_REWARD_HIGH_RISK('123'), // todo: replace with decision id from db
        emoji: '🎸',
    },
    {
        name: 'Low hanging fruit',
        url: PAGE_ROUTES.DECISIONS.TRADEOFFS.LOW_HANGING_FRUIT('123'), // todo: replace with decision id from db
        emoji: '🍍',
    },
];

type Props = HTMLAttributes<HTMLElement>

export default function Links(props: Props) {
    const pathName = usePathname();
    const { decision } = useDecisionStore();
    const { options, optionsAreValidated } = useOptionsStore();

    // todo: have to be moved to the serverside.
    const canAccessStep1 = true;
    const canAccessStep2 = decision.length > 0 && canAccessStep1;
    const canAccessStep3 = options.length > 0 && canAccessStep2;
    const canAccessTradeOffs = optionsAreValidated && canAccessStep2 && canAccessStep3;

    return (
        <div {...props}>
            <div className="space-y-4 flex-col flex">
                {
                    canAccessStep1 && (
                        <PageLink
                            href={PAGE_ROUTES.DECISIONS.MAKE()}
                            isActive={pathName === PAGE_ROUTES.DECISIONS.MAKE()}
                        >
                            What decision do you have to make?
                        </PageLink>
                    )
                }
                {
                    canAccessStep2 && (
                        <PageLink
                            href={PAGE_ROUTES.DECISIONS.DEFINE_OPTIONS('123')} // todo: replace with decision id from db
                            isActive={pathName === PAGE_ROUTES.DECISIONS.DEFINE_OPTIONS('123')} // todo: replace with decision id from db
                        >
                            What options do you have?
                        </PageLink>
                    )
                }
                {
                    canAccessStep3 && (
                        <PageLink
                            href={PAGE_ROUTES.DECISIONS.EVALUATE_OPTIONS('123')} // todo: replace with decision id from db
                            isActive={pathName === PAGE_ROUTES.DECISIONS.EVALUATE_OPTIONS('123')} // todo: replace with decision id from db
                        >
                            Evaluate your options
                        </PageLink>
                    )
                }
                {
                    canAccessTradeOffs && (
                        <>
                            <Divider className="my-4"/>

                            <div className="space-y-4 flex-col flex">
                                <PageLink
                                    href={PAGE_ROUTES.DECISIONS.TRADEOFFS.INDEX('123')} // todo: replace with decision id from db
                                    isActive={pathName === PAGE_ROUTES.DECISIONS.TRADEOFFS.INDEX('123')} // todo: replace with decision id from db
                                >
                                    Tradeoffs
                                </PageLink>

                                {tradeoffsLinks.map((link, index) => (
                                    <PageLink
                                        key={index}
                                        href={link.url}
                                        isActive={pathName === link.url}
                                    >
                                        <span className="mr-1">{link.emoji}</span> <span>{link.name}</span>
                                    </PageLink>
                                ))}
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}

function PageLink({ href, children, isActive }: { href: string, children: ReactNode, isActive?: boolean }) {
    return <Link
        href={href}
        className={cn('text-sm font-[300] focus:bg-neutral-7 hover:bg-neutral-7 transition-colors p-2 -m-2 rounded-[4px]', {
            'text-primary bg-neutral-7': isActive,
        })}
    >
        {children}
    </Link>;
}
