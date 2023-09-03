'use client';

import { useParams } from 'next/navigation';
import { Id } from '../../../convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

export function useOptions() {
	const params = useParams();
	const decisionId = params?.decisionId as Id<'decisions'>;
	const data = useQuery(api.options.getByDecisionId, {decisionId});

	const isLoading = data === undefined || data === null;
	const isEmpty = data && data?.options?.length === 0;
	const isReady = data && data?.options?.length > 0;

	return {
		data: data && data?.options,
		isLoading,
		isEmpty,
		isReady,
		areOptionsValid: data && data?.areOptionsValid,
	};
}