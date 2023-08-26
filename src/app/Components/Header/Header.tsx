'use client';

import FullLogo from '@/components/ui/Logo/FullLogo';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/constants/routes';
import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { useConvexAuth } from 'convex/react';
import { cn } from '@/lib/utils';

export default function Header() {
    const { isLoading } = useConvexAuth();

    return (
        <header className="pt-4 lg:pt-8 flex items-center justify-between">
            <Link href={PAGE_ROUTES.HOME} className="inline-block">
                <FullLogo className={'fill-black'}/>
            </Link>

            <div
                className={cn('transition', {
                    'opacity-0 pointer-events-none': isLoading,
                    'opacity-100 pointer-events-auto': !isLoading,
                })}
            >
                <UserButton afterSignOutUrl={PAGE_ROUTES.HOME}/>
            </div>
        </header>
    );
}