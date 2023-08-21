'use client';

import DashboardHeader from '@/app/Components/DashboardHeader/DashboardHeader';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

export default function Page() {
    const decisions = useQuery(api.decisions.get);

    return (
        <div>
            <DashboardHeader/>

            <div className="px-4 max-w-[1142px] mx-auto">
                {
                    decisions?.map((decision) => <p key={decision._id}>{decision.decision}</p>)
                }
            </div>
        </div>
    );
}