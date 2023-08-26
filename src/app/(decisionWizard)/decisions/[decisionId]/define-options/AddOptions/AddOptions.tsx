'use client';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/ui/Button/Button';
import useOptionsStore from '@/app/(decisionWizard)/store/options';
import { Option } from '@/types/options';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputGroup } from '@/components/ui/Input/Input';
import Divider from '@/components/ui/Divider/Divider';
import BottomNav from '@/app/(decisionWizard)/BottomNav/BottomNav';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/constants/routes';

const schema = z.object({
    title: z
    .string()
    .min(3, { message: 'An option should be at least 3 character long.' })
    .max(60, {
        message: 'A description should be at most 60 characters long.',
    }),
});

type FormData = z.infer<typeof schema>;

export default function AddOptions() {
    const { options, setOptions, removeOption } = useOptionsStore();

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: '',
        },
    });

    const handleSubmit = () => {
        const newOptions = [
            ...options,
            {
                id: uuidv4(),
                title: form.getValues('title'),
                ratings: {
                    financialCost: 0,
                    levelOfEffort: 0,
                    timeInvestment: 0,
                    risk: 0,
                    shortTermReturn: 0,
                    longTermReturn: 0,
                },
            },
        ];

        setOptions(newOptions);

        form.reset();
    };

    const handleDelete = (option: Option) => {
        removeOption(option);
    };

    return (
        <div>
            <Divider/>

            <ul className="mt-8 space-y-6">
                {options.map((option) => (
                    <li
                        key={option.id}
                        className="bg-white rounded-[4px] px-4 py-[21.5px] flex justify-between items-center"
                    >
                        <span className="pr-3">{option.title}</span>

                        <button
                            type="button"
                            className="text-red-500"
                            onClick={() => handleDelete(option)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            {options.length > 0 && <Divider className="mt-8"/>}

            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex mt-8">
                <InputGroup
                    inputProps={{
                        placeholder: 'Enter a create option',
                        className: 'h-[45px] rounded-r-none',
                        onChange: (e) => form.setValue('title', e.target.value),
                        value: form.watch('title'),
                    }}
                    error={form.formState.errors.title?.message}
                />

                <Button
                    type="submit"
                    className="rounded-l-none whitespace-nowrap h-[45px]"
                >
                    Add Option
                </Button>
            </form>

            <BottomNav>
                <Button variant="ghost" type="button" asChild>
                    <Link href={PAGE_ROUTES.DECISIONS.CREATE}>Go back</Link>
                </Button>

                {options.length > 1 && (
                    <Button type="button" asChild className="ml-4">
                        {/*// todo: replace with decision id from db*/}
                        <Link href={PAGE_ROUTES.DECISIONS.EVALUATE_OPTIONS('123')}>Continue</Link>
                    </Button>
                )}
            </BottomNav>
        </div>
    );
}
