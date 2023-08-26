'use client';

import DashboardHeader from '@/app/Components/DashboardHeader/DashboardHeader';
import React from 'react';
import Button from '@/components/ui/Button/Button';
import Link from 'next/link';
import List from '@/app/(dashboard)/dashboard/List/List';
import { PAGE_ROUTES } from '@/constants/routes';

export default function Page() {

    return (
        <div>
            <DashboardHeader/>

            <main className="max-w-[800px] mx-auto pt-12 pb-24 px-4 lg:px-0">
                <div className="flex justify-end pb-8 mb-8 border-b-2 border-neutral-7">
                    <Button asChild>
                        <Link href={PAGE_ROUTES.DECISIONS.CREATE}>Add new</Link>
                    </Button>
                </div>

                <List/>
            </main>
        </div>
    );
}