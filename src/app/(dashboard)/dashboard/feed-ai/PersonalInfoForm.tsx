'use client';

import TextareaGroup from '@/components/ui/Textarea/Textarea';
import React, { useEffect, useState } from 'react';
import { InputGroup } from '@/components/ui/Input/Input';
import { SearchIcon, XIcon } from 'lucide-react';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../../../convex/_generated/api';
import Button from '@/components/ui/Button/Button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/Toaster/useToast';

const maxCharacterCount = 70;

const schema = z.object({
    description: z
    .string()
    .min(6, { message: 'Description should be at least 6 characters long.' })
    .max(maxCharacterCount, { message: `Description should be at most ${maxCharacterCount} characters long.` }),
});

type FormData = z.infer<typeof schema>;

export default function PersonalInfoForm() {
    const userData = useQuery(api.users.get);
    const updateUserData = useMutation(api.users.update);
    const { toast } = useToast();

    const [isAutoSuggestOpen, setIsAutoSuggestOpen] = useState(false);

    const suggestedTopics = [
        'Agile',
        'Team building',
        'Business',
    ];

    const generalTopics = [
        'Business',
        'Career',
        'Health',
        'Business',
        'Career',
        'Health',
        'Business',
        'Career',
        'Health',
        'Business',
        'Career',
        'Health',
        'Business',
        'Career',
        'Health',
    ];

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            description: userData?.description || '',
        },
        mode: 'onChange',
    });

    const handleSubmit = (form: FormData) => {
        updateUserData({ description: form.description, interests: [] }).catch(() => {
            toast({
                title: 'Error',
                description: 'Something went wrong updating user data',
                variant: 'destructive',
            });
        }).then(() => {
            toast({
                title: 'Success!',
                description: 'User data updated.',
            });
        });
    };

    useEffect(() => {
        form.setValue('description', userData?.description || '');
    }, [userData?.description]);

    return (
        <form
            onSubmit={form.handleSubmit(handleSubmit)}
        >
            <TextareaGroup
                textAreaProps={{
                    name: 'decision',
                    placeholder:
                        'I’m a project manager with 7 years of experience.',
                    onChange: (e) => form.setValue('description', e.target.value),
                    value: form.watch('description'),
                }}
                currentCharacterCount={20}
                maxCharacterCount={120}
            />

            <div className="mt-8">
                <label className="text-sm">
                    My interests
                </label>

                <div className="flex flex-wrap mt-2">
                    <div
                        className="mb-2 mr-2 rounded-full bg-primary text-white px-2 py-1 flex items-center"
                    >
                        <p className="ml-1.5 text-sm">SaaS</p>

                        <button
                            type="button"
                            className="ml-0.5 rounded-full p-1 hover:bg-neutral-3/20 focus:bg-neutral-3/20"
                        >
                            <XIcon size={16}/>
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <InputGroup
                        className="mt-1"
                        inputProps={{
                            placeholder: 'Start typing to search',
                            className: 'rounded-b-none focus:shadow-lg focus-visible:ring-0',
                            onFocus: () => setIsAutoSuggestOpen(true),
                            onBlur: () => setIsAutoSuggestOpen(false),
                        }}
                        icon={<SearchIcon size={20} className="text-neutral-3"/>}
                    />

                    {
                        isAutoSuggestOpen && (
                            <ul className="absolute mt-[-1px] bg-white w-full shadow-lg rounded-b-[4px] border-t-[1px] border-neutral-7 text-sm max-h-[300px] overflow-auto">
                                <li className="p-1.5 px-3 m-1.5 font-medium">
                                    Suggestions based on your profile:
                                </li>

                                {
                                    suggestedTopics.map((topic, index) => (
                                        <li key={index} className="p-1.5 px-3 m-1.5 rounded-[4px] hover:bg-neutral-7">
                                            {topic}
                                        </li>
                                    ))
                                }

                                <li className="h-[1px] border-t-neutral-7"/>

                                <li className="p-1.5 px-3 m-1.5 font-medium">
                                    General topics:
                                </li>

                                {
                                    generalTopics.map((topic, index) => (
                                        <li key={index} className="p-1.5 px-3 m-1.5 rounded-[4px] hover:bg-neutral-7">
                                            {topic}
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
            </div>

            <Button type="submit" className="mt-4">
                Save
            </Button>
        </form>
    );
}