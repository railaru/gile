'use client';

import React from 'react';
import IconLogo from '../../../components/ui/Logo/IconLogo';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/constants/routes';
import HamburgerMenu from './HamburgerMenu';
import { UserButton } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import { useConvexAuth } from 'convex/react';


type Props = {
	showHamburgerMenu?: boolean;
}
export default function DashboardHeader({showHamburgerMenu}: Props) {
	const {isLoading} = useConvexAuth();

	return (
		<header
			className="px-4 lg:px-8 py-[10.5px] h-[54px] border-b border-neutral-6 flex items-center justify-between"
		>
			<Link href={PAGE_ROUTES.DASHBOARD.INDEX}>
				<IconLogo className="w-[28px] h-[28px] fill-black"/>
			</Link>

			<div
				className={cn('transition', {
					'opacity-0 pointer-events-none': isLoading,
					'opacity-100 pointer-events-auto': !isLoading,
				})}
			>
				<UserButton afterSignOutUrl={PAGE_ROUTES.HOME}/>
			</div>

			{
				showHamburgerMenu && <HamburgerMenu/>
			}
		</header>
	);
}
