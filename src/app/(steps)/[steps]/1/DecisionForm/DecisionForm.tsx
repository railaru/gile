'use client';

import React from 'react';
import TextareaGroup from '@/components/ui/Textarea/Textarea';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import BottomNav from '@/app/(steps)/[steps]/BottomNav/BottomNav';
import Button from '@/components/ui/Button/Button';
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from '@/constants/routes';
import useDecisionStore from '@/app/(steps)/[steps]/store/decision';

const schema = z.object({
    decision: z
    .string()
    .min(6, { message: 'A decision should be at least 6 characters long.' })
    .max(60, { message: 'A decision should be at most 60 characters long.' }),
});

type FormData = z.infer<typeof schema>;

export default function DecisionForm() {
    const router = useRouter();
    const { decision, setDecision } = useDecisionStore();

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            decision,
        },
    });

    const handleSubmit = (form: FormData) => {
        setDecision(form.decision);
        router.push(PAGE_ROUTES.STEPS[2]);
    };

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
                maxCharacterCount={60}
            />

            <BottomNav>
                <Button type="submit">Continue</Button>
            </BottomNav>
        </form>
    );
}
