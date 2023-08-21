import FullLogo from '@/components/ui/Logo/FullLogo';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/constants/routes';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

export default function Header() {
    return (
        <header className="pt-4 lg:pt-8 flex items-center justify-between">
            <Link href={PAGE_ROUTES.HOME} className="inline-block">
                <FullLogo className={'fill-black'}/>
            </Link>

            <UserButton afterSignOutUrl={PAGE_ROUTES.HOME}/>
        </header>
    );
}