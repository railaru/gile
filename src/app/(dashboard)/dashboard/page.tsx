'use client';

import DashboardHeader from '@/app/Components/DashboardHeader/DashboardHeader';
import { useConvexAuth, useMutation, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import useStoreUserEffect from '@/hooks/useStoreUserEffect';
import { useState } from 'react';
import { Input } from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import { Id } from '../../../../convex/_generated/dataModel';

export default function Page() {
    const { isAuthenticated } = useConvexAuth();
    const userId = useStoreUserEffect();
    const decisions = useQuery(api.decisions.get);
    const [decision, setDecision] = useState('');

    const addDecision = useMutation(api.decisions.add);
    const deleteDecision = useMutation(api.decisions.deleteById);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        addDecision({ decision });
    };

    const handleDelete = (_id: Id<'decisions'>) => {
        deleteDecision({ _id });
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

                <div className="space-y-4">
                    {
                        decisions?.map((decision) => (
                            <div key={decision._id} className="flex items-center space-x-4">
                                <p>{decision.decision}</p>

                                <Button variant="destructive" type="button" onClick={() => handleDelete(decision._id)}>
                                    Delete
                                </Button>
                            </div>
                        ))
                    }
                </div>

                <div>
                    {isAuthenticated ? 'Logged in' : 'Logged out or still loading'}
                </div>
            </div>
        </div>
    );
}