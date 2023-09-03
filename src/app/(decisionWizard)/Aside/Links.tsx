'use client';

import React, { HTMLAttributes, ReactNode } from 'react';
import { PAGE_ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import Divider from '@/components/ui/Divider/Divider';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';


type Props = HTMLAttributes<HTMLElement>

export default function Links(props: Props) {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const params = useParams();
    const decisionIdFromSearchParams = searchParams.get('id') as Id<'decisions'>;
    const decisionIdFromParams = params?.decisionId as Id<'decisions'>;
    const decisionId = decisionIdFromSearchParams || decisionIdFromParams;

    const storedDecisionRecord = useQuery(api.decisions.getById, { _id: decisionId || '' });
    const decision = storedDecisionRecord?.decision || '';

    const options = useQuery(api.options.getByDecisionId, { decisionId });

    const canAccessStep1 = true;
    const canAccessStep2 = decision.length > 0 && canAccessStep1;

    const canAccessStep3 = options && options?.length > 0 && canAccessStep2;
    const canAccessTradeOffs = canAccessStep2 && canAccessStep3;

    if ( !decisionId) {
        return null;
    }

    const links = [
        {
            name: 'Evaluate your options',
            url: PAGE_ROUTES.DECISIONS.EVALUATE_OPTIONS(decisionId),
        },
    ];

    const tradeoffsLinks = [
        {
            name: 'Risk weighted return',
            url: PAGE_ROUTES.DECISIONS.TRADEOFFS.RISK_WEIGHTED_RETURN(decisionId),
            emoji: '🐢',
        },
        {
            name: 'High reward & High risk',
            url: PAGE_ROUTES.DECISIONS.TRADEOFFS.HIGH_REWARD_HIGH_RISK(decisionId),
            emoji: '🎸',
        },
        {
            name: 'Low hanging fruit',
            url: PAGE_ROUTES.DECISIONS.TRADEOFFS.LOW_HANGING_FRUIT(decisionId),
            emoji: '🍍',
        },
    ];

    const decisionLink = decisionId ? PAGE_ROUTES.DECISIONS.MAKE(decisionId) : PAGE_ROUTES.DECISIONS.MAKE();

    return (
        <div {...props}>
            <div className="space-y-4 flex-col flex">
                {
                    canAccessStep1 && (
                        <PageLink
                            href={decisionLink}
                            isActive={pathName.includes('make')}
                        >
                            What decision do you have to make?
                        </PageLink>
                    )
                }
                {
                    canAccessStep2 && (
                        <PageLink
                            href={PAGE_ROUTES.DECISIONS.DEFINE_OPTIONS(decisionId)}
                            isActive={pathName === PAGE_ROUTES.DECISIONS.DEFINE_OPTIONS(decisionId)}
                        >
                            What options do you have?
                        </PageLink>
                    )
                }
                {
                    canAccessStep3 && (
                        <PageLink
                            href={PAGE_ROUTES.DECISIONS.EVALUATE_OPTIONS(decisionId)}
                            isActive={pathName === PAGE_ROUTES.DECISIONS.EVALUATE_OPTIONS(decisionId)}
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
                                    href={PAGE_ROUTES.DECISIONS.TRADEOFFS.INDEX(decisionId)}
                                    isActive={pathName === PAGE_ROUTES.DECISIONS.TRADEOFFS.INDEX(decisionId)}
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
