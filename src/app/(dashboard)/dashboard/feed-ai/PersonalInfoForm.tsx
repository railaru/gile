'use client';

import TextareaGroup from '@/components/ui/Textarea/Textarea';
import React, { useEffect, useRef, useState } from 'react';
import { InputGroup } from '@/components/ui/Input/Input';
import { SearchIcon, XIcon } from 'lucide-react';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../../../convex/_generated/api';
import Button from '@/components/ui/Button/Button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/Toaster/useToast';
import { useClickAway } from '@/hooks/client-actions/useClickAway';
import { topicsListGroups } from '@/app/(dashboard)/dashboard/feed-ai/topicsListGroups';

const maxCharacterCount = 120;

const schema = z.object({
    description: z
    .string()
    .min(6, { message: 'Description should be at least 6 characters long.' })
    .max(maxCharacterCount, { message: `Description should be at most ${maxCharacterCount} characters long.` }),
});

type FormData = z.infer<typeof schema>;

function checkIfHasDifferentItems(array1: string[], array2: string[]) {
    if (array1.length !== array2.length) {
        return true;
    }

    return !array1.every(item => array2.includes(item));
}

export default function PersonalInfoForm() {
    const userData = useQuery(api.users.get);
    const updateUserData = useMutation(api.users.update);
    const { toast } = useToast();

    const [isAutoSuggestOpen, setIsAutoSuggestOpen] = useState(false);
    const [interests, setInterests] = useState(userData?.interests || []);
    const [searchQuery, setSearchQuery] = useState('');

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            description: userData?.description || '',
        },
        mode: 'onChange',
    });

    const handleSubmit = (form: FormData) => {
        updateUserData({ description: form.description, interests }).catch(() => {
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

    const handleAddInterest = (interest: string) => {
        const checkIfInterestExists = interests.find((interestToCheck) => interestToCheck === interest);

        if (checkIfInterestExists) {
            return;
        }

        setInterests([...interests, interest]);
    };

    const handleRemoveInterest = (interest: string) => {
        setInterests(interests.filter((interestToCheck) => interestToCheck !== interest));
    };

    useEffect(() => {
        form.setValue('description', userData?.description || '');
        setInterests(userData?.interests || []);
    }, [userData?.description]);

    const inputGroupRef = useRef(null);

    useClickAway(inputGroupRef, () => {
        setIsAutoSuggestOpen(false);
    });

    const filteredTopicListGroupItems = topicsListGroups.map((group) => ({
        ...group,
        items: group.items.filter((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase())),
    }));

    const hasUnsavedChanges = checkIfHasDifferentItems(interests, userData?.interests || []) || form.getValues().description !== userData?.description || '';

    return (
        <form
            onSubmit={form.handleSubmit(handleSubmit)}
        >
            <div className="mb-8">
                <label className="text-sm">
                    My interests
                </label>

                <div className="flex flex-wrap mt-2">
                    {
                        interests.map((interest, index) => (
                            <div
                                key={index}
                                className="mb-2 mr-2 rounded-full bg-primary text-white px-2 py-1 flex items-center"
                            >
                                <p className="ml-1.5 text-sm">{interest}</p>

                                <button
                                    type="button"
                                    className="ml-0.5 rounded-full p-1 hover:bg-neutral-3/20 focus:bg-neutral-3/20"
                                    onClick={() => handleRemoveInterest(interest)}
                                >
                                    <XIcon size={16}/>
                                </button>
                            </div>
                        ))
                    }
                </div>

                <div
                    ref={inputGroupRef}
                    className="relative"
                >
                    <InputGroup
                        className="mt-1"
                        inputProps={{
                            placeholder: 'Start typing to search',
                            className: 'rounded-b-none focus:shadow-lg focus-visible:ring-0',
                            onClick: () => setIsAutoSuggestOpen(true),
                            onChange: (e) => setSearchQuery(e.target.value),
                            value: searchQuery,
                        }}
                        icon={<SearchIcon size={20} className="text-neutral-3"/>}

                    />

                    {
                        isAutoSuggestOpen && (
                            <div
                                className="absolute z-[2] mt-[-1px] bg-white w-full shadow-lg rounded-b-[4px] border-t-[1px] border-neutral-7 text-sm max-h-[300px] overflow-auto"
                            >
                                {
                                    filteredTopicListGroupItems.map((group, index) => {
                                        const isLast = index === topicsListGroups.length - 1;
                                        const groupHasUnadedItems = group.items.some((topic) => !interests.find((interest) => interest === topic));
                                        const showTitle = !searchQuery && groupHasUnadedItems;

                                        return (
                                            <ul key={index}>
                                                {
                                                    showTitle && (
                                                        <li className="p-1.5 px-3 m-1.5 font-medium">
                                                            {group.title}
                                                        </li>
                                                    )
                                                }

                                                {
                                                    group.items.map((topic, index) => {

                                                        const itemIsAlreadyAdded = Boolean(interests.find((interest) => interest === topic));

                                                        if (itemIsAlreadyAdded) {
                                                            return null;
                                                        }

                                                        return (
                                                            <li
                                                                key={index}
                                                                className="p-1.5 px-3 m-1.5 rounded-[4px] hover:bg-neutral-7"
                                                                role="button"
                                                                onClick={() => handleAddInterest(topic)}
                                                            >
                                                                {topic}
                                                            </li>
                                                        );
                                                    })
                                                }

                                                {
                                                    !isLast && !searchQuery && (
                                                        <li className="h-[1px] border-t-neutral-7"/>
                                                    )
                                                }
                                            </ul>
                                        );
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>

            <TextareaGroup
                textAreaProps={{
                    name: 'decision',
                    placeholder:
                        'I’m a project manager with 7 years of experience.',
                    onChange: (e) => form.setValue('description', e.target.value),
                    value: form.watch('description'),
                }}
                currentCharacterCount={form.watch('description').length}
                maxCharacterCount={maxCharacterCount}
                error={form.formState.errors.description?.message}
            />

            {
                hasUnsavedChanges && userData && (
                    <p className="text-sm mt-3 text-neutral-2">
                        You have unsaved changes.
                    </p>
                )
            }

            <Button type="submit" className="mt-4">
                Save
            </Button>
        </form>
    );
}