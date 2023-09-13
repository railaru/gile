import DashboardHeader from '@/app/Components/DashboardHeader/DashboardHeader';
import React from 'react';
import Button from '@/components/ui/Button/Button';
import Link from 'next/link';
import List from '@/app/(dashboard)/dashboard/List/List';
import { PAGE_ROUTES } from '@/constants/routes';

export const metadata = {
    title: 'Dashboard | Gilė',
};

export default function Page() {
	
    return (
        <div>
            <DashboardHeader/>

            <main className="max-w-[800px] mx-auto pt-12 pb-24 px-4 lg:px-0">
                <div className="flex justify-end pb-8 mb-8 border-b-2 border-neutral-7">
                    <Button asChild variant="ghost" className="text-primary hover:text-primary focus:text-primary mr-2">
                        <Link href={PAGE_ROUTES.DASHBOARD.FEED_AI}>Feed AI</Link>
                    </Button>

                    <Button asChild>
                        <Link href={PAGE_ROUTES.DECISIONS.MAKE()}>Add new</Link>
                    </Button>
                </div>

                <List/>
            </main>
        </div>
    );
}