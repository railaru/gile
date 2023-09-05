'use client';

import React, { useEffect } from 'react';
import TextareaGroup from '@/components/ui/Textarea/Textarea';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import BottomNav from '@/app/(decisionWizard)/BottomNav/BottomNav';
import Button from '@/components/ui/Button/Button';
import { useRouter, useSearchParams } from 'next/navigation';
import { PAGE_ROUTES } from '@/constants/routes';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../../../../convex/_generated/api';
import { Id } from '../../../../../../convex/_generated/dataModel';
import useDecisionStore from "@/app/(decisionWizard)/store/decision";

const maxCharacterCount = 70;

const schema = z.object({
	decision: z
		.string()
		.min(6, {message: 'A decision should be at least 6 characters long.'})
		.max(maxCharacterCount, {message: `A decision should be at most ${maxCharacterCount} characters long.`}),
});

type FormData = z.infer<typeof schema>;

export default function DecisionForm() {
	const router = useRouter();
	const params = useSearchParams();
	const decisionId = params.get('id') as Id<'decisions'>
	const storedDecisionRecord = useQuery(api.decisions.getById, {_id: decisionId});
	const storedDecision = storedDecisionRecord?.decision || '';
	const {decision: clientStateDecision} = useDecisionStore();
	const decision = storedDecision || clientStateDecision || '';

	const addDecision = useMutation(api.decisions.add);
	const editDecision = useMutation(api.decisions.edit);

	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			decision
		},
		mode: 'onChange',
	});

	const handleSubmit = (form: FormData) => {
		const shouldUpdate = decisionId && decisionId !== '';

		if (shouldUpdate) {
			editDecision({_id: decisionId as Id<'decisions'>, decision: form.decision}).then(() => {
				router.push(PAGE_ROUTES.DECISIONS.DEFINE_OPTIONS(decisionId));
			});

			return;
		}

		addDecision({decision: form.decision}).then((decisionId) => {
			router.push(PAGE_ROUTES.DECISIONS.DEFINE_OPTIONS(decisionId));
		});
	};

	useEffect(() => {
		form.setValue('decision', decision);
	}, [decision, form]);

	return (
		<form onSubmit={form.handleSubmit(handleSubmit)}>
			<TextareaGroup
				textAreaProps={{
					name: 'decision',
					placeholder:
						'Write one sentence about what challenge you want to tackle. Keep it short and simple.',
					onChange: (e) => form.setValue('decision', e.target.value),
					value: form.watch('decision'),
				}}
				error={form.formState.errors.decision?.message}
				currentCharacterCount={form.watch('decision')?.length}
				maxCharacterCount={maxCharacterCount}
			/>

			<BottomNav>
				<Button type="submit">Continue</Button>
			</BottomNav>
		</form>
	);
}
