'use client';

import { Input } from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import { useConvexAuth, useMutation, useQuery } from 'convex/react';
import useStoreUserEffect from '@/hooks/useStoreUserEffect';
import { api } from '../../../../../convex/_generated/api';
import { useState } from 'react';
import { Id } from '../../../../../convex/_generated/dataModel';

export default function TestForm() {
    const { isAuthenticated } = useConvexAuth();
    const userId = useStoreUserEffect();
    const decisions = useQuery(api.decisions.get);
    const addDecision = useMutation(api.decisions.add);
    const deleteDecision = useMutation(api.decisions.deleteById);

    const [decision, setDecision] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        addDecision({ decision });
    };

    const handleDelete = (_id: Id<'decisions'>) => {
        deleteDecision({ _id });
    };

    return (
        <div className="space-y-8">
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
    );
}