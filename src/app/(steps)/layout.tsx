import React, { ReactNode } from 'react';
import DashboardHeader from '@/app/DashboardHeader/DashboardHeader';
import Aside from '@/app/(steps)/[steps]/Aside/Aside';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <DashboardHeader/>

            <div className="lg:flex">
                <Aside/>

                <div className="lg:h-[calc(100vh-50px)] lg:overflow-auto w-full scroll-smooth">
                    <main className="max-w-[800px] mx-auto pt-12 pb-24 px-4 lg:px-0">{children}</main>
                </div>
            </div>
        </>
    );
}
