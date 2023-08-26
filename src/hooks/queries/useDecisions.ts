import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

export function useDecisions() {
    const data = useQuery(api.decisions.get);

    const isLoading = data === undefined || data === null;
    const isEmpty = data && data?.length === 0;
    const isReady = data && data?.length > 0;

    return {
        data,
        isLoading,
        isEmpty,
        isReady,
    };
}