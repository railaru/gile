'use client';

import DashboardHeader from '@/app/Components/DashboardHeader/DashboardHeader';
import { useConvexAuth, useMutation, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import useStoreUserEffect from '@/hooks/useStoreUserEffect';
import { useState } from 'react';
import { Input } from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';

export default function Page() {
    const { isAuthenticated } = useConvexAuth();
    const userId = useStoreUserEffect();
    const decisions = useQuery(api.decisions.get);
    const [decision, setDecision] = useState('');

    const addDecision = useMutation(api.decisions.add);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        addDecision({ decision });
    };

    return (
        <div>
            <DashboardHeader/>

            <div className="px-4 lg:px-8 mt-8 space-y-8">
                <div>
                    {userId === null ? <div>Storing user...</div> : <div>Stored user: {userId}</div>}
                </div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="decision">Decision</label>

                    <br/>

                    <Input type="text" value={decision} onChange={(e) => setDecision(e.target.value)}/>

                    <br/>

                    <Button type="submit">
                        Add decision
                    </Button>
                </form>

                <div>
                    {
                        decisions?.map((decision) => <p key={decision._id}>{decision.decision}</p>)
                    }
                </div>

                <div>
                    {isAuthenticated ? 'Logged in' : 'Logged out or still loading'}
                </div>
            </div>
        </div>
    );
}